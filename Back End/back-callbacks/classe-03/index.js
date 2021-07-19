const frutas = ["Manga", "PERA", "abacaxi", "banaNA", "MAçã"];

const reFrutas = frutas.map(x => {
    let caixaBaixa = x.toLowerCase();
    let primeira = caixaBaixa.slice(0, 1);
    let inicial = primeira.toUpperCase();
    let resto = caixaBaixa.slice(1);
    let fruta = inicial + resto;
    return `${frutas.indexOf(x)} - ${fruta}`;
}
);

console.log(reFrutas);