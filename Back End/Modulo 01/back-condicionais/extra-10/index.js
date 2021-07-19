const caractere = "2";
// Obs: Não tratei para caracteres especiais, diferente de vogais, consoantes ou números, como por exemplo "#"; daí, o algoritmo tb considera consoante.
if (caractere == "A" || caractere == "a" || caractere == "E" || caractere == "e" || caractere == "I" || caractere == "i" || caractere == "O" || caractere == "o" || caractere == "U" || caractere == "u") {
    if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
        console.log("Vogal maiúscula");
    } else {
        console.log ("Vogal minúscula")
    }
} else if (caractere == "1" || caractere == "2" || caractere == "3" || caractere == "4" || caractere == "5" || caractere == "6" || caractere == "7" || caractere == "8" || caractere == "9" || caractere == "0") {
    console.log("Número");
} else {
    console.log("Consoante");
}