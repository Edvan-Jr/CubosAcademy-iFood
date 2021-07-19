const nomeArquivo = 'Foto da Familia.img';

function validaArquivo(nome) {
    i = nome.lastIndexOf('.');
    if (nome.slice(i + 1, nome.length) === 'jpg' || nome.slice(i + 1, nome.length) === 'jpeg' || nome.slice(i + 1, nome.length) === 'png' || nome.slice(i + 1, nome.length) === 'gif') {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

validaArquivo(nomeArquivo);