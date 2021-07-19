let pessoa = [{
    nome: "Edvan",
    idade: 34,
    altura: 172
}]

const rePessoa = pessoa.map(x =>
({
    nome: x.nome,
    idade: `${x.idade} anos`,
    altura: `(${x.altura / 100}m`,
    maioridade: (x.idade >= 18 ? "É maior de idade" : "É menor de idade")
})
)

console.log(rePessoa);