 function calcularMedia () {

    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "Vai Corinthians!"

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        resultado.innerHTML = ("Por favor, preencha todos os valores!");
    }

    else if (nota1 > 10 || nota2 > 10 || nota3 > 10){
        resultado.innerHTML = ("POr favor, insira notas menores que 10!")
    }

    else if (nota1 < 0 || nota2 < 0 || nota3 < 0){
        resultado.innerHTML = ("Por favor, insira notas positivas!")
    }

    else {
        let media = (nota1 + nota2 + nota3) / 3

        if (media >7){
            resultado.innerHTML = `Média: ${media.toFixed(2)} - Situação Aprovado`
        }
        else if (media >= 5){
            resultado.innerHTML = `Média: ${media.toFixed(2)} - Situação Recuperação`
        }
        else {
            resultado.innerHTML = `Média: ${media.toFixed(2)} - Situação Reprovado`
        }
    }


 }

/*
 // Selecionando elementos do DOM
const inputName = document.getElementById('inputName');
const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('result');

// Função para exibir o resultado
function showResult() {
    const name = inputName.value; // Pegando o valor do input

    if (name.trim() !== '') {
        resultDiv.textContent = `Olá, ${name}! Seja bem-vindo!`; // Exibe a mensagem
    } else {
        resultDiv.textContent = 'Por favor, insira seu nome.';
    }

    inputName.value = ''; // Limpa o campo de input após enviar
}

// Adicionando o evento de clique no botão
submitButton.addEventListener('click', showResult);

// Se pressionar Enter no campo de input, o resultado também será mostrado
inputName.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showResult();
    }
});
*/