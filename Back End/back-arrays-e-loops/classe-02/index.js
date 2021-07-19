const letras = ["A", "a", "B", "C", "E", "e"];
let quantidade = 0;
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        quantidade++;
    }
}
if (quantidade == 0) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada");
} else {
    console.log(`${quantidade} letra(s) 'E' ou 'e' foram encontrada(s) no vetor.`)
}