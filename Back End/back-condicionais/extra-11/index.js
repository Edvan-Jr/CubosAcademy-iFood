//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;
let restante = 1800000 - totalJaPagoPeloAluno;
if (mesesDecorridos < 60 && rendaMensalEmCentavos >= 200000 && totalJaPagoPeloAluno < 1800000) {
    valorDaParcela = rendaMensalEmCentavos * 18/100;
    if (restante >= valorDaParcela) {
        console.log(`O valor da parcela desse mês é R$${valorDaParcela/100}`)
    } else {
        console.log(`O valor da parcela desse mês é R$${restante/100}`)
    }
} else if (totalJaPagoPeloAluno == 1800000) {
    console.log("Tá pago! O valor pago pelo estudante já atingiu o custo total do curso, de R$18000. É um enorme prazer pra nós da Cubos ver um aluno nosso se tornar um bom profissional. Caso lhe interesse, temos outros cursos para lhe ajudar a crescer ainda mais. Sucesso!")
} else if (mesesDecorridos >= 60) {
    console.log("O tempo decorrido do contrato atingiu 60 meses, e o aluno não deve mais nada.")
} else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, pois a renda do estudante está abaixo do valor mínimo de R$2000.")
}