const primeiroNome = "";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome);
} else if (primeiroNome) {
    console.log(primeiroNome);
} else if (true) {
    console.log("Deve preencher pelo menos o primeiro nome");
}