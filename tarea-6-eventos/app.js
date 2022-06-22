const productos = [
  {nombre:"Rig 3090", valor: "$" + 12000 },
  {nombre:"Rig 3080ti", valor: "$" + 11000 },
  {nombre:"Rig 1660SUPER", valor: "$" + 6000 },
  {nombre:"Asic minero Bitcoin" , valor: "$" + 9700 },
  {nombre:"Curso Blockchain" , valor: "$" + 1200 },
  {nombre:"Mantenimiento", valor: "$" + 200}
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
      <li>${producto.nombre} - Valor USD: ${producto.valor}</li>
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

// filtrar();