function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Sandalia', 49.99))
console.log(criarProduto('Notebook', 2199.99))