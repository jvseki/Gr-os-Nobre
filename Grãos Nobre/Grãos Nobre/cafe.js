const hora = new Date().getHours();

let mensagemBoasVindas;
let slogan;

if (hora < 12){
    mensagemBoasVindas = "Bom dia!";
    slogan = "Comece o dia com o nosso café fresco e aromático.";
} else if(hora < 18){
    mensagemBoasVindas ="Boa tarde!";
    slogan = "Uma pausa perfeita com o melhor café da cidade.";
} else {
    mensagemBoasVindas = "Boa noite!";
    slogan = "Relaxe e aproveite uma de nossas delícias noturnas.";
}

const tituloBanner = document.querySelector(".banner h2");
const sloganBanner = document.querySelector(".banner p");

tituloBanner.textContent = mensagemBoasVindas;
sloganBanner.textContent = slogan;

const destaques = [
    {
        titulo: "☕ Conheça Nossas Novidades ☕",
        descricao: "Prove o nosso café do dia, sempre com um toque especial.",
    },
    {
        titulo: "🍰 Nossos Bolos e Doces 🍰",
        descricao: "Uma seleção especial de cafés, bolos e delicias feitas para você.",
    },
    {
        titulo: "🍹 Bebidas Geladas 🍹",
        descricao: "Perfeitas para o calor: cafés gelados, chás e sucos.",
    },
];

let indiceAtual = 0;

const tituloCardapio = document.querySelector("#destaque-cardapio h2");
const descricaoCardapio = document.querySelector("#destaque-cardapio p");

function atualizarDestaque() {
    tituloCardapio.textContent = destaques[indiceAtual].titulo;
    descricaoCardapio.textContent = destaques[indiceAtual].descricao;

    indiceAtual = (indiceAtual + 1) % destaques.length;
}

atualizarDestaque();
setInterval(atualizarDestaque, 5000);