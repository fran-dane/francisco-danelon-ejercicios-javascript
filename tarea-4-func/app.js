const productos = [
    {nombre: "Rig", precio: 9000},
    {nombre: "Rig 3080ti", precio: 12000},
    {nombre: "Curso Blockchain", precio: 1500},
    {nombre: "Curso Solidity", precio: 1800},
    {nombre: "Mantenimiento", precio: 800},
    {nombre: "Mantenimiento quincenal", precio: 800},
    {nombre: "Housing", precio: 2000},
];

let busqueda = prompt("Busque el producto que desea");

const result = productos.filter(elemento => elemento.nombre.includes(busqueda));
console.log(result);
