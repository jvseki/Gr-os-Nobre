function fazerPedido() {
  let nome = prompt("Qual é o seu nome?");

  if (!nome) {
    alert("Você não digitou o nome 😅");
    return;
  }

  let pedido = prompt(nome + ", digite os produtos que deseja pedir, separados por vírgula.\nEx: Café Latte, Cappuccino, Cookie");

  if (!pedido) {
    alert("Você não digitou nenhum produto 😅");
    return;
  }

  let produtos = pedido.toLowerCase().split(",").map(item => item.trim());

  let confirmados = "";
  let naoDisponiveis = "";

  for (let i = 0; i < produtos.length; i++) {
    let item = produtos[i].trim();
    let encontrado = false;

    
    switch (item) {
      case "café espresso":
      case "café latte":
      case "café americano":
      case "cappuccino":
      case "frappuccino de café":
      case "limonada gelada":
      case "frappé de chocolate":
      case "chá gelado de pêssego":
      case "smoothies de frutas":
      case "água mineral":
      case "brigadeiro":
      case "refrigerante":
      case "suco de laranja":
      case "cookie":
        encontrado = true;
        break;
      default:
        encontrado = false;
    }

    if (encontrado) {
      if (confirmados === "") confirmados = item;
      else confirmados = confirmados + ", " + item;
    } else {
      if (naoDisponiveis === "") naoDisponiveis = item;
      else naoDisponiveis = naoDisponiveis + ", " + item;
    }
  }

  let mensagem = "";
  if (confirmados !== "") mensagem += "Pedidos confirmados: " + confirmados + " ✅\n";
  if (naoDisponiveis !== "") mensagem += "Itens não disponíveis: " + naoDisponiveis + " ❌\n";

  let resposta = confirm(nome + ", você confirma seu pedido?\n\n" + mensagem);
  if (resposta) {
    alert("Obrigado, " + nome + "! Seu pedido foi confirmado ✅");
  } else {
    alert("Pedido cancelado ❌");
  }
}
