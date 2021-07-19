const idade = 65;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;
if (idade >= 12 && idade <= 65) {
    if (!possuiPatologia) {
        if (altura >= 150) {
            if (ehEstudante || idade < 18) {
                console.log("**10 REAIS**");
            } else {
                console.log("**20 REAIS**")
            }
        } else {
            console.log("**ACESSO NEGADO**")
        }
    } else {
        console.log("**ACESSO NEGADO**");
    }
} else {
    console.log("**ACESSO NEGADO**");
}