const numeros = [8, 20, 4, 1, 12];
let maiorDiferenca = 0, diferenca = 0;
for (let i = 0; i <= numeros.length - 2; i++) {
    for (let j = i + 1; j <= numeros.length - 1; j++) {
        diferenca = Math.abs(numeros[i] - numeros[j]);
        if (diferenca > maiorDiferenca) {
            maiorDiferenca = diferenca;
        }
    }
}
console.log(maiorDiferenca);