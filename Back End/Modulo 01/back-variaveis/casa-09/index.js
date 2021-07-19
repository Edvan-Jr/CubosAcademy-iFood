const n = 6;

let S = (n - 2) * 180;
console.log(`A soma dos ângulos internos de um polígono de ${n} lados é ${S}º`);

let angulo = S / n;
console.log(`E, caso esse polígono seja regular, cada ângulo interno mede ${angulo}º`);