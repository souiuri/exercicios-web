const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Iuri',
        idade: 27,
        endereco: {
            lograudouro: 'Rua Paulo Batista',
            numero: 91
        }
    },
    condutores: [{
        nome: 'Leticia',
        idade: '25'
    }, {
        nome: 'Louise',
        idade: 2
    }], 
    calcularValorSeguro: function(){
        
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lograudouro'] = 'Av Gigante'
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)