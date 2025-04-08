//Switch Case - Menu
//if 

//Metodos de pagamento
//1 - Pix - 10% de desconto
//2 - Débito - 5% de desconto
//3 - Crédito - valor total


function calcularPagamento() {

    let FormaPagamento = "pix"
    let ValorTotal = 100
    let ValorFinal

    switch (FormaPagamento) {
        case "pix":
            ValorFinal = ValorTotal * 0.9
            console.log(ValorFinal);
            break

        case "debito":
            ValorFinal = ValorTotal * 0.95
            console.log(ValorFinal);
            break

        case "credito":
            console.log(ValorFinal);
            break
        default:
            console.log("Informe uma forma de pagamento válido!")
            break

    }
}