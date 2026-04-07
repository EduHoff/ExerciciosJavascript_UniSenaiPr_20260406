const bntResultado = document.querySelector("#bntResultado");
const texto = document.querySelector("#inputTexto"); 
const listaUl = document.querySelector("#listaItens");
const totalSpan = document.querySelector("#totalItens");

let total = 0;

bntResultado.addEventListener("click", () => {
    const valor = texto.value.trim();

    if (valor === "") {
        alert("Por favor, digite algo.");
        return;
    }

    const novoItem = document.createElement("li");

    novoItem.innerHTML = `
        <span>${valor}</span>
        <button class="btn-delete">Remover</button>
    `;

    const btnRemover = novoItem.querySelector(".btn-delete");
    btnRemover.addEventListener("click", () => {
        novoItem.remove();
        total--;
        atualizarContador();
    });

    listaUl.appendChild(novoItem);

    total++;
    atualizarContador();

    texto.value = "";
    texto.focus();
});

function atualizarContador() {
    totalSpan.textContent = total;
}