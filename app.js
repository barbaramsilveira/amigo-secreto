let amigos = [];
let i = 0;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do amigo secreto");
    exibirTextoNaTela("h2", "Escreva o nome dos seus amigos");
}
exibirMensagemInicial();
function adicionarAmigo() {
    let amigo = document.querySelector("#amigo").value.trim();
    exibirTextoNaTela("ul", amigo);
    if (amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
    amigos.push(amigo);
    atualizarListaAmigos();
    limparCampo();
    }
}   
function limparCampo() {
    let amigo = document.querySelector("#amigo");
    amigo.value = "";
}
function atualizarListaAmigos() {
    let lista = document.querySelector("ul");
    lista.innerHTML = "";   
    for (let i = 0; i <amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    let lista = document.querySelector("ul");
    let resultado = document.querySelector("#resultado");
    lista.innerHTML = "";
    if (!amigos || amigos.length === 0) {
        alert("Não é possível sortear amigos, a lista está vazia. Por favor, tente novamente!");
    } else {
        amigos.forEach((amigo) => {
            let item = document.createElement("li");
            item.textContent = amigo;
            lista.appendChild(item);
        });
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `O amigo sorteado é: ${amigoSorteado}!`;
    }
}
function reiniciarJogo() {
    amigos = [];
    limparCampo();
    document.querySelector("#listaAmigos").innerHTML = "";
    document.querySelector("#resultado").textContent = "";
    document.querySelector(".button-draw").removeAttribute("disabled");
}







