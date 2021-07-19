const nomes = ["Ana", "Joana", "Carlos", "amanda", "lucas", "alberto", "Antony"];
const filtrado = [];
let palavra = "";
for (let i = 0; i <= nomes.length - 1; i++) {
    palavra = nomes[i];
    if (palavra[0] == "A" || palavra[0] == "a") {
        filtrado.push(palavra);
    }
}
console.log(filtrado);