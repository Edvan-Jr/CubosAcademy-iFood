let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

let identPad = identificador.padStart(6, '0');

let nomeAux = '';
const posicoes = [];
while (nome.includes(' ')) {
    posicoes.push(nome.indexOf(" ") + 1);
    nomeAux = nome.replace(" ", "-");
    nome = nomeAux;
}
let nomeArray = nome.split("-");
let teste = [];
let upp = '';
let uppp = '';
let cake = '';
for (let termo of nomeArray) {
    upp = termo.slice(0, 1);
    uppp = upp.toUpperCase();
    cake = termo.slice(1);
    teste.push(uppp + cake);
}
let finalmente = '';
for (let parte of teste) {
    finalmente = finalmente + parte + ' ';
}
let enfim = finalmente.substr(0, finalmente.length - 1);

let emailTrim = email.trim();

let tagsStrg = '';
for (let i = 0; i <= tags.length - 2; i++) {
    tagsStrg = tagsStrg + tags[i] + ', ';
}
tagsStrg += tags[tags.length - 1];

console.log(identPad);
console.log(enfim);
console.log(emailTrim);
console.log(tagsStrg);