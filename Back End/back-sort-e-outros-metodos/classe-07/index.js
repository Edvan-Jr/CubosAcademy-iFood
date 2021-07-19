const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

function filtrarAdultos(array) {
    return array.filter(usuario => usuario.idade >= 18 && usuario.idade <= 65);
}

function todosCNH(array) {
    (array.every(usuario => usuario.habilitado ? console.log(`todos passaram no teste`) : console.log(`todos precisam estar habilitados`)));
}

todosCNH(filtrarAdultos(usuários));