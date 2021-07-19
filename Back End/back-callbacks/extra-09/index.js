const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

let selecao = pessoas.filter(pessoa => pessoa.profissao === 'Programador' && pessoa.idade > 20);
console.log(selecao);

selecao = pessoas.filter(pessoa => pessoa.profissao === 'Jornalista' && pessoa.idade > 30);
console.log(selecao);

selecao = pessoas.filter(pessoa => (pessoa.profissao === 'Programador' || pessoa.profissao === 'Jornalista') && pessoa.idade <= 29);
console.log(selecao);