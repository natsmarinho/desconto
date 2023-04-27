
const btnResultado = document.querySelector("#btn-result").addEventListener("click", showValue);

function showValue(){
    const valorProduto = document.querySelector("#valor").value;
    const valorDesconto = document.querySelector("#porcentagem-desconto").value;
    const dividindoValores = valorProduto / 100;
    const desconto = dividindoValores * valorDesconto;
    console.log(desconto);

    const valorElement = document.createElement("p");
    
    const divDosResultados = document.querySelector(".valor-desconto");
    divDosResultados.appendChild(valorElement);

    if (desconto < 1){
        valorElement.textContent = `O valor do desconto é de $${desconto} centavos`
    }
     else {
        valorElement.textContent = `O valor do desconto é de $${desconto} reais`;
    }
}