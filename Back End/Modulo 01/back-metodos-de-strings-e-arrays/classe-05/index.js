const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'A Divina Comédia', 'Dom Quixote'];
const nomeDoLivro = "Dom Quixote";

let posicao;
let cont = 1;
for (let livro of livros) {
    if (livro === nomeDoLivro) {
        break;
    }
    cont++;
}
console.log(`O livro está na posição ${cont}`);