// function bienvenida(){

// }
// function categorias(){
//     producto = prompt(
//       "¡Explora nuestras categorías y elige la que más te guste! \n 1: CodeShirts \n 2: FanSeries \n 3: FitnessTees n\ 4: PrideOfArgentina "  
//     );
//     //condicionales: si producto === "1" {alert que diga "Diseños disponibles para CodeShirts"}
//     //hacer lo mismo con el resto de opciones con else if
    
// }
// function diseños(){
//     //volver a preguntar por diseños: diseño \n 1:  Hello World \n 2: Apple \n: 3 Android \ 4: GitLab 
// }
// function talles(){
//     //talles: talle \n 1: S \n 2: M \n 3: L \n 4: XL
// }

// let nombre= prompt("¡Bienvenido/a a Ave Félix, Remeras Personalizadas! Por favor, ingresa tu nombre para comenzar:");
// let categorias= prompt("¡Explora nuestras categorías y elige la que más te guste!");
// let diseños= prompt("Diseños disponibles")



// let bienvenida = prompt("¡Bienvenido/a a Ave Félix, Remeras Personalizadas! Por favor, ingresa tu nombre para comenzar:");
// alert("Hola " + bienvenida + " para comenzar, simplemente sigue estos pasos: \nElige una categoría\nSelecciona tu diseño\nElige tu talle y cantidad\nEl importe de cada remera es de $18.000 y ¡tenés envío GRATIS! \n¡Feliz compra!")
// function opcionContinuar(){
//     let opcion = prompt("Deseas continuar? \n1=SI \n2=NO" );
//     return parseInt(opcion);
// }
// opcionContinuar() 
// while(opcion !=2){
//     prompt("¡Explora nuestros diseños y elige el que más te guste! \n1- Rocky Balboa \n2- Breaking Bad");
//     prompt("¡Genial elección! Ahora, por favor selecciona tu talle: \n1- S \n2- M \n3 - L \n4- XL");
//     opcionContinuar();
    
// }

let bienvenida = prompt("¡Bienvenido/a a Ave Félix, Remeras Personalizadas! Por favor, ingresa tu nombre para comenzar:");
alert("Hola " + bienvenida + " para comenzar, simplemente sigue estos pasos: \nElige una categoría\nSelecciona tu diseño\nElige tu talle y cantidad\nEl importe de cada remera es de $18.000 y ¡tenés envío GRATIS! \n¡Feliz compra!");

let montoTotal = 0

function opcionContinuar(){
    let opcion = prompt("Deseas continuar? \n1=SI \n2=NO" );
    return parseInt(opcion);
}

let opcion = opcionContinuar();

while(opcion != 2){
    let disenio = prompt("¡Explora nuestros diseños y elige el que más te guste! \n1- Rocky Balboa \n2- Breaking Bad");
    let talle = prompt("¡Genial elección! Ahora, por favor selecciona tu talle: \n1- S \n2- M \n3- L \n4- XL");
    montoTotal +=18000
    opcion = opcionContinuar();
}
if(montoTotal >0){
    alert("Tu monto total a pagar es de: " + montoTotal + "$ 💸\n\nLos métodos de pago son:\n💳  Tarjeta de crédito / débito\n💵  Efectivo en locales\n🏦  Transferencia Bancaria\n\nLuego coordinaremos el envío! 🚚✈️\n¡Que las disfrutes! ❤️");
}else{
    alert("Gracias por nada!")
}