let enviar = document.getElementById("enviar")
let datos = document.getElementById("datos")
let borrar = document.getElementById("borrar")

enviar.addEventListener("click", () => {
    let nombre =document.querySelector("#nombre").value;
    let edad =document.querySelector("#edad").value;

    const content = document.createElement("div")

    content.innerHTML = `
    <img class="imagen" src="https://cdn.pixabay.com/photo/2017/03/26/10/45/welcome-2175196_960_720.jpg" />
    <h4> Le damos la bienvenida a ${nombre} </h4>
    <h4> La edad de ${nombre} es de ${edad} años </h4>
    `;
    datos.append(content)
})

borrar.addEventListener("click", () => {
    datos.innerHTML = ""
    datos.hidden = "none"
})
