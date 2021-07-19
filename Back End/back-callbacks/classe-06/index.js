const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
const tempoTotal = 10000;
const tempoCada = tempoTotal / jogadores.length;

let cont = 0;

function imprimirAVez() {
    if (cont <= jogadores.length - 1) {
        console.log(`Vez de ${jogadores[cont]} jogar`);
        cont++;
    } else {
        console.log(`A rodada terminou!`);
        clearInterval(intervalID);
    }
}

imprimirAVez();
const intervalID = setInterval(imprimirAVez, tempoCada);