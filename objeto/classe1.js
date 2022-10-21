class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class ClicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new ClicloFinanceiro(6, 2018)
contas.addLancamentos(salario)
console.log(contas.sumario())