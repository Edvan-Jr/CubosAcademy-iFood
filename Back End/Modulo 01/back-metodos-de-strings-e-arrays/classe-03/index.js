const texto = "Aprenda programar do zero na Cubos Academy";
let minusculo = texto.toLowerCase();
let url = "";
while (minusculo.includes(" ")) {
    url = minusculo.replace(" ", "-");
    minusculo = url;
}
console.log(url);