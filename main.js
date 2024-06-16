let bienvenida = prompt("¡Bienvenido/a a Ave Félix 🥰 Remeras Personalizadas! Por favor, ingresa tu nombre para comenzar 👉");
alert("Hola 👋 " + bienvenida + " para comenzar, simplemente sigue estos pasos 🤓 \n✅Selecciona un diseño \n✅Elige tu talle\n💰El importe de cada remera es de $18.000 y ¡tenés envío 🚘 GRATIS! \n¡Feliz compra! 😃");

let montoTotal = 0

function opcionContinuar(){
    let opcion = prompt("Deseas continuar? \n1=SI ✅\n2=NO ❌" );
    return parseInt(opcion);
}

let opcion = opcionContinuar();

while(opcion != 2){
    let disenio = prompt("¡Explora nuestros diseños y elige el que más te guste! \n1- Rocky Balboa 🥊 \n2- Breaking Bad ☠️");
    let talle = prompt("¡Genial elección 😉! Ahora, por favor selecciona tu talle: \n1- S \n2- M \n3- L \n4- XL");
    montoTotal +=18000
    opcion = opcionContinuar();
}
if(montoTotal >0){
    alert("Tu monto total a pagar es de: " + montoTotal + "$ 💸\n\nLos métodos de pago son:\n💳  Tarjeta de crédito / débito\n💵  Efectivo en locales\n🏦  Transferencia Bancaria\n\nLuego coordinaremos el envío! 🚚✈️\n¡Que las disfrutes! ❤️");
}else{
    alert("Gracias por nada! 😒")
}