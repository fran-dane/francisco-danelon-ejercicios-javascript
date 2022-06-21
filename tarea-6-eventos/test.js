// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

// funciones callback -> vimos en clase con Caro

// const suma = (n1,n2) => n1 + n2
// const resta = (n1,n2) => n1 - n2  

// const iva = valor => valor * 0.21

// let precioProd = 12000
// let descuento = 300

// let precioIva = resta(suma(precioProd, iva(precioProd)), descuento);

// alert("El precio FINAL del RIG es de " + "$" + precioIva + " despues del IVA y descuentos")

// 


// Calcular l edaad promedio de personas registradas

// aca lo practico con un promedio simple -> sin ciclos

// // var persona1;
// // var persona2;
// // var persona3;
// // var persona4;
// // var persona5;

// // var persona1 = parseInt(prompt("Ingrese la edad de la primer persona: "))
// // var persona2 = parseInt(prompt("Ingrese la edad de la segunda persona: "))
// // var persona3 = parseInt(prompt("Ingrese la edad de la tercer persona: "))
// // var persona4 = parseInt(prompt("Ingrese la edad de la cuarta persona: "))
// // var persona5 = parseInt(prompt("Ingrese la edad de la quinta persona: "))

// // sumaPersonas = persona1 + persona2 + persona3 + persona4 + persona5;
// // promedio = sumaPersonas/5;

// // console.log("El promedio de edad de estas 5 personas es de : " + promedio)


// aca intento realizarlo con ciclos 

// var personas;
// var promedio;
// var suma = 0;
// var cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que son en este momento: "))

// for(i=0; i< cantidadPersonas; i++){
//     var personas = parseInt(prompt("Ingrese la edad de las personas " + i));
//     suma = suma + personas;
// }

// promedio = suma / cantidadPersonas;

// alert("El promedio de edad es de " + promedio);



// 


// Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true, determine el valor de cada expresión lógica:
// a) (X && Y) || (X && Z)                 
// b) (X || !Y) && (!X || Z)
// c) X || Y && Z                          
// d) !(X || Y) && Z 
// e) X || Y || X && !Z && !Y              
// f) !X || !Y || Z && X && !Y


// X = TRUE || Y = FALSE || Z = TRUE

// a

// puntoA = true && false || true && false;

// console.log("El punto A es: " + puntoA)

// // b

// puntoB = true || !false && !true || true;

// console.log("El punto B es : " + puntoB)

// // c

// puntoC = true || false && true;

// console.log("El punto C es :" + puntoC)

// // d

// puntoD = !(true || false) && true;

// console.log("El punto D es :" + puntoD)

// // e

// puntoE = true || false || true && !true && !false;

// console.log("El punto E es : " + puntoE)

// // f

// puntoF = !true || !false || true && true && !false;

// console.log("El punto F es :" + puntoF)


// // Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.

// function isVocal(char){
//     if(["a", "e", "i", "o", "u"].includes(char.toLowerCase())){
//       console.log("Vocal!")  
//     }else {
//       console.log("No es vocal!")
//     }
//   }



// let div = document.getElementById("container");
// console.log(div);

// let texto = document.getElementById("parrafo");
// console.log(texto);


// let perros = document.getElementsByClassName("perritos");
// console.log(perros[0]); 

// let divs = document.getElementsByTagName("div");
// console.log(divs[1].innerHTML); // --> muestra por consola el HTML -> en este caso "Perro1"\


// let h1 = document.getElementById("saludo");
// h1.innerHTML = "cambiando h1 con innerHTML" // modifica el HTML desde JS


// explicacion de almacenamiento de datos

/*

paso por valor (tipos de datos nativos):

let numero1 = 2;

let numero2 = numero1;


|  2  |     |  2  |
numero1       numero2


numero2 = 5;

|  2  |     |  5  |
numero1       numero2


*/

/*


paso x (tipos de datos NO nativos):
(objetos)

let persona1 = {nombre: "Andres", edad: 12};
let persona2 = persona1;

|  {nombre: "Andres", edad: 12}  |
              persona1 persona2           se almacenan en el mismo campo de memoria


persona2.nombre = "camila";
console.log(persona1);     esto va a devolver camila, ya que como comparte el mismo campo de memoria, el ultimo dato lo va a pisar

*/

// aca le asignamos una clase a "contenedor" -> y le aplicamos CSS -> style.css estan las propiedades.

// let contenedor = document.getElementById("contenedor");

// let color = prompt("Queres un background-color?")

// if(color === "si") {
//   contenedor.className("container");
// }

const productos = [
  {nombre:"Rig 3080ti", valor: 11000 },
  {nombre:"Rig 3090", valor: 12000 },
  {nombre:"Rig 1660SUPER", valor: 6000 },
  {nombre:"Curso Blockchain" , valor: 1200 },
  {nombre:"Asic minero Bitcoin" , valor: 9700 },
  {nombre:"Mantenimiento", valor: 400}
]


const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () => {
  // console.log(formulario.value);

  resultado.innerHTML = '';

  const texto = formulario.value.toLowerCase();

  for(let producto of productos) {
    let nombre = producto.nombre.toLowerCase();
    if(nombre.includes(texto)) {
      resultado.innerHTML += `
      <li>${producto.nombre} - Valor: ${producto.valor}</li>
      <img  class="imagen-disponible" src="https://t4.ftcdn.net/jpg/00/46/99/31/360_F_46993188_6NvG3huQmbqOwUj7eyMZM7icOxv04IZ1.jpg" />
      `
    }
  }

  if(resultado.innerHTML === "") {
      resultado.innerHTML += `
      <li>Producto no encontrado...</li>
      <img class="imagen-error" src="https://thumbs.dreamstime.com/b/icono-de-producto-no-disponible-ilustraci%C3%B3n-vectores-plano-y-aislado-con-dise%C3%B1o-m%C3%ADnimo-sombra-larga-117825738.jpg" />
      `
  }

}

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar();