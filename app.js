const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulresultado = document.getElementById("resultado")
function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    //?ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + ulListaAmigos.innerHTML;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}
    
function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulresultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    let LimpiarLista =document.getElementById("listaAmigos");
    LimpiarLista.innerHTML = ""
}  
