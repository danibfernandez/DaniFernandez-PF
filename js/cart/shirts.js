document.addEventListener('DOMContentLoaded', () => {
    fetch('../cart/items.json')
       .then(response => response.json())
       .then(data => {
          const cartContainer = document.getElementById('cart-container');
 
          // Función para agregar ítems al carrito y guardarlos en localStorage
          const addToCart = (item, size, sizeSelect) => {
             if (!size) {
                alert('Por favor selecciona un talle.');
                return;
             }
 
             let cart = JSON.parse(localStorage.getItem('cart')) || [];
             let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0; // Corrige el valor inicial
 
             // Verificar si el ítem ya está en el carrito
             const existingItem = cart.find(cartItem => cartItem.id === item.id && cartItem.size === size);
             if (existingItem) {
                // Incrementar la cantidad si ya existe
                totalAmount -= existingItem.price * existingItem.quantity; // Restar monto antiguo
                existingItem.quantity += 1;
                totalAmount += item.price * existingItem.quantity; // Agregar monto nuevo
             } else {
                // Agregar el nuevo ítem con cantidad 1 y tamaño
                item.quantity = 1;
                item.size = size;
                cart.push(item);
                totalAmount += item.price; // Sumar monto del nuevo ítem
             }
 
             // Guardar en localStorage
             localStorage.setItem('totalAmount', totalAmount.toFixed(2));
             localStorage.setItem('cart', JSON.stringify(cart));
             function showModal(itemName, size) {
               // Actualizar el contenido del modal
               const modalBody = document.querySelector('#cartModal .modal-body');
               modalBody.textContent = `${itemName} (${size}) agregado al carrito!`;
           
               // Mostrar el modal
               const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
               cartModal.show();
           }
           
           // Ejemplo de cómo llamar a la función showModal con los valores correctos
           showModal(item.name, size);
 
             // Limpiar la selección de talle
             sizeSelect.value = '';
          };
 
          data.forEach(item => {
             const cartItem = document.createElement('div');
             cartItem.classList.add('cart-item');
 
             const itemImage = document.createElement('img');
             itemImage.src = item.image;
             cartItem.appendChild(itemImage);
 
             const itemName = document.createElement('h1');
             itemName.textContent = item.name;
             cartItem.appendChild(itemName);
 
             const itemPrice = document.createElement('p');
             itemPrice.textContent = `$${parseFloat(item.price).toFixed(2)}`;
             cartItem.appendChild(itemPrice);
 
             const sizeSelect = document.createElement('select');
             sizeSelect.innerHTML = `
                     <option value="">Selecciona un talle</option>
                     <option value="S">S</option>
                     <option value="M">M</option>
                     <option value="L">L</option>
                     <option value="XL">XL</option>
                 `;
             cartItem.appendChild(sizeSelect);
 
             const addButton = document.createElement('button');
             addButton.textContent = 'Agregar al Carrito';
             addButton.addEventListener('click', () => {
                const selectedSize = sizeSelect.value;
                addToCart(item, selectedSize, sizeSelect);
             });
             cartItem.appendChild(addButton);
 
             cartContainer.appendChild(cartItem);
          });
       })
       .catch(error => console.error('Error al leer el archivo JSON:', error));
 
    // Manejar el botón de "Finalizar Compra"
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
       const cart = JSON.parse(localStorage.getItem('cart')) || [];
       const checkoutModalBody = document.getElementById('checkoutModalBody');
       const confirmButton = document.getElementById('confirm-button');
 
       // Limpiar el contenido del modal
       checkoutModalBody.innerHTML = '';
 
       if (cart.length === 0) {
          // Mostrar mensaje de carrito vacío
          checkoutModalBody.innerHTML = '<p>Tu carrito está vacío.</p>';
          // Solo mostrar el botón de cerrar
          confirmButton.style.display = 'none';
       } else {
          // Agregar los ítems al modal
          cart.forEach(item => {
             const itemDiv = document.createElement('div');
             itemDiv.classList.add('cart-item');
             itemDiv.innerHTML = `
                     <img src="${item.image}" alt="${item.name}" />
                     <h1>${item.name}</h1>
                     <p>Talle: ${item.size}</p>
                     <p>$${(item.price * item.quantity).toFixed(2)}</p>
                     <p>Cantidad: ${item.quantity}</p>
                 `;
             checkoutModalBody.appendChild(itemDiv);
          });
          // Mostrar el botón de confirmar
          confirmButton.style.display = 'inline-block';
       }
 
       // Mostrar el modal de checkout
       const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
       checkoutModal.show();
    });
 
    // Manejar el botón de "Confirmar"
    document.getElementById('confirm-button').addEventListener('click', () => {
       // Cerrar el modal de checkout
       const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
       if (checkoutModal) {
          checkoutModal.hide();
       }
 
       // Mostrar el modal de agradecimiento
       const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
       thankYouModal.show();
    });
 
    // Manejar el botón de "Aceptar" en el modal de agradecimiento
    document.getElementById('reload-page-button').addEventListener('click', () => {
       localStorage.removeItem('cart');
       localStorage.removeItem('totalAmount');
       location.reload();
    });
 });