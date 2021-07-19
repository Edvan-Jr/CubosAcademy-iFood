const input = '4 0 2 3';

let entrada = input.trim().split(' ').map(x => parseInt(x));
const saida = entrada;

//validando G4 sozinho
let taxi = saida[3];
saida[3] = 0;
//Validando G2 de 2 em 2
if (saida[1] >= 2) {
    taxi += Math.trunc(saida[1] / 2);
    saida[1] = saida[1] % 2;
}
/*if (entrada[1] >= 2) {
    while (saida[1] >= 2) {
        saida[1] -= 2;
        taxi++;
    }
} //falta validar G2 == 1*/
//entrada = saida;
//Validando G3 com G1
if (saida[2] != 0 && saida[0] != 0) {
    if (saida[2] > saida[0]) {
        taxi += saida[0];
        saida[2] -= saida[0];
    } else if (saida[0] > saida[2]) {
        taxi += saida[2];
        saida[0] -= saida[2];
        saida[2] = 0;
    } else {
        taxi += saida[0];
        saida[0] = 0;
        saida[2] = 0;
    }
    /*for (let i = 0; i <= entrada[2]; i++) {
        saida[2]--;
        saida[0]--;
        taxi++;
        if (saida[2] == 0 || saida[0] == 0) {
            break;
        }
    }*/
} //falta validar G3 sozinho
//Validando G2 com G1
if (saida[1] == 1 && saida[0] != 0) {
    saida[1] = 0;
    saida[0] = (saida[0] > 1 ? saida[0] - 2 : 0);
    taxi++; //possivel validacao G2
}
//Validando G2 sozinho
if (saida[1] == 1) {
    taxi++;
    saida[1] = 0;
}
//Validando G1 >= 4
if (saida[0] >= 4) {
    taxi += Math.trunc(saida[0] / 4);
    saida[0] = saida[0] % 4;
    /*while (saida[0] >= 4) {
        taxi++;
        saida[0] -= 4;
    }*/
}
//Validando G1 < 4
if (saida[0] > 0) {
    taxi++; //Validando G1
    saida[0] = 0;
}
//validando G3 sozinho
taxi += saida[2];
console.log(taxi);