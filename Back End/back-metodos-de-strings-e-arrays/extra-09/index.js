const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda', 'Guto', 'Mário', 'Alberto'];
const tamanhoDoGrupo = 5;

function divideGrupo(lista, tamGrupo) {
    var numeroGrupo = 1;
    for (var i = 0; i < lista.length; i = i + tamGrupo) {
        console.log(`Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamGrupo)).join(', ')}`);
        numeroGrupo++;
    }
}

/*function dividirGrupos (array, tamGrupo) {
    divisao = array / tamGrupo;
    const grupos = {};
    while (let i <= divisao) {
    
    }
}*/

divideGrupo(nomes, tamanhoDoGrupo);