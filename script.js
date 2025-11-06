const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: "R$ 250,00", descricao: "Mouse sem fio com ótima Qualidade." },
  { id: 2, nome: "Notebook Acer", preco: "R$ 5.500,00", descricao: "Ótimo Notebook para jogos." },
  { id: 3, nome: "Caixinha de som", preco: "R$ 100,00", descricao: "Qualidade ótima." }
];

function renderProdutos() {
  const container = document.getElementById("produtos");
  if (!container) return;
  container.innerHTML = "";
  produtos.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${p.nome}</h5>
          <p class="card-text">${p.descricao}</p>
          <p class="card-text"><strong>${p.preco}</strong></p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}




document.addEventListener("DOMContentLoaded", () => {
  renderProdutos();

  // Adiciona evento de clique aos botões Comprar 
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Produto adicionado ao carrinho!");
    });
  });
});
