const productos = ["Rig", "Housing", "Mantenimiento", "Curso"];

let nombre = prompt("Ingrese el nombre del producto deseado")

if (productos.includes(nombre)) {
    alert("Ofrecemos el producto")
}else{
    alert("No ofrecemos el producto")
}