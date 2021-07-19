const fs = require('fs');

const msg = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./classe-07/meuarquivo.txt", msg, () => {
    console.log("Arquivo escrito");
});