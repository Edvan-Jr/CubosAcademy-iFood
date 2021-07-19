const jogada1 = "papel"
const jogada2 = "tesoura"

if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log("Pedra ganhou!");
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("Pedra ganhou!");
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log("Papel ganhou!");
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log("Papel ganhou!");
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log("Tesoura ganhou!");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("Tesoura ganhou!");
}

//seu código aqui