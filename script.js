
const btnResultado = document.querySelector("#btn-result").addEventListener("click", showValue);

function showValue(){
    const valorProduto = document.querySelector("#valor").value;
    const valorDesconto = document.querySelector("#porcentagem-desconto").value;
    const dividindoValores = valorProduto / 100;
    const desconto = dividindoValores * valorDesconto;
    

    const valorElement = document.createElement("p");
    valorElement.style.fontSize = "2em";
    
    const divDosResultados = document.querySelector(".valor-desconto");
    divDosResultados.appendChild(valorElement);

    if (desconto < 1){
        valorElement.textContent = `O valor do desconto é de $${desconto.toFixed(2)} centavos.`
    } else if (desconto == 1){
        valorElement.textContent = `O valor do desconto é de $${desconto.toFixed(2)} real.`
    } else if (valorDesconto == 0 || valorProduto == 0){
        valorElement.textContent = "Insira um valor!"
    }
     else {
        valorElement.textContent = `O valor do desconto é de $${desconto.toFixed(2)} reais.`;
    } 
}