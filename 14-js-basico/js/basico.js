const DESCONTO = 0.1
const JUROS = 0.2

let teclado = {
    codigo: '645659',
    nome: 'teclado gamer',
    valor: 500
}

let product = {
    codigo: '165436',
    nome: "MousePad Star Wars",
    valor: 100
}

function calcular(produto,numParcelas) {
if (numParcelas <=12) {
    if (numParcelas <=10) {
        if (numParcelas ==0) {
            let valor = produto.valor
            let valorComDesconto = valor * DESCONTO
            console.log(valor-valorComDesconto) 
        } else{
            let valorparcelado = produto.valor/numParcelas
            console.log(valorparcelado);
        
        }
    } else{
        let valorDoJuros = produto.valor * juros
        let valorProdutoComJuros = produto.valor + valorDoJuros;
        let valorParcelado = valorProdutoComJuros / numParcelas
        console.log(valorParcelado)
    }  
}else
console.log("Número máximo de parcelas permitido é 12")

    }

calcular( product, 5)
calcular(teclado, 10)