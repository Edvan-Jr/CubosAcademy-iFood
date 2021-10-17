const genero = document.querySelector('select');
const musica = document.querySelector('input');

const musicas = [
    { genero: 'baiao', musica: 'Respeita Januário' },
    { genero: 'samba', musica: 'O samba da minha terra' },
    { genero: 'musica-de-rezo', musica: 'Casa da FLoresta' }
];

genero.addEventListener('change', function () {
    const indice = musicas.findIndex(x => x.genero === genero.value);
    musica.value = musicas[indice].musica;
});