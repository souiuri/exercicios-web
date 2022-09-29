function tratarErroELancar(erro){
    // throw new Error('...')
    //throw 14
    //throw true
    //throw 'mensagem'
    throw {
        name: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
   try{
    console.log(obj.name.toUpperCase() + '!!!' )
   } catch(e) {
        tratarErroELancar(e)
   }finally{
       console.log('Final')
   }
    
}

const obj = {nome: 'Roberto' }
imprimirNomeGritado(obj)