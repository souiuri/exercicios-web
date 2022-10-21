// Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Iuri', idade: 27}
Object.seal(pessoa)
console.log('Selado ', Object.isSealed(pessoa))
delete pessoa.nome
pessoa.idede = 29
console.log(pessoa)

//Object.freeze  = selado + valores constantes