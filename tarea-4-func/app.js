const productos = [
    {nombre: "Rig", precio: 10000},
    {nombre: "Curso", precio: 1500},
    {nombre: "Mantenimiento", precio: 800},
    {nombre: "Housing", precio: 2000},
];

// const nombres = productos.map(elemento => elemento.nombre);
// console.log(nombres);
let busqueda = prompt("Ingrese el producto que desea")
const result = productos.filter(elemento => elemento.nombre.includes(busqueda));
console.log(result);