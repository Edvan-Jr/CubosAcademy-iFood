const comentario = "Esse covid é muito perigoso!";
const palavras = comentario.split(" ");
if (comentario.includes("covid") || comentario.includes("COVID") || comentario.includes("Covid") || comentario.includes("pandemia") || comentario.includes("PANDEMIA") || comentario.includes("Pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}