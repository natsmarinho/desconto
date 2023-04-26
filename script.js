
const btnResultado = document.querySelector("#btn-result").addEventListener("click", showValue);

function showValue(){
    const valorProduto = document.querySelector("#valor").value;
    const valorDesconto = document.querySelector("#porcentagem-desconto").value;
    const dividindoValores = valorProduto / 100;
    const desconto = dividindoValores * valorDesconto;
    console.log(desconto);

    const valorElement = document.createElement("p");
    valorElement.textContent = `O valor do desconto é de $${desconto} reais`;

    const divDosResultados = document.querySelector(".valor-desconto");
    divDosResultados.appendChild(valorElement);
}