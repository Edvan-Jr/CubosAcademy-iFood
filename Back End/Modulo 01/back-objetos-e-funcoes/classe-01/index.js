const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acerto = 0, nota = 0;
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acerto++;
            nota += 2;
        }
    }
    console.log(`O aluno(a)(x) ${prova.aluno} acertou ${acerto} questões, e obteve nota ${nota}`)
}

corrigirProva(prova);