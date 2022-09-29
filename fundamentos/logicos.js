function compras(trabalho1, trabalho2){
    const comprarSovete = trabalho1 || trabalho2
    const comprarTv50 = trabalho2 && trabalho1
    //const compraTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const materSaldavel = !comprarSovete
    return {comprarSovete, comprarTv50, comprarTv32, materSaldavel}
}

console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false,false))