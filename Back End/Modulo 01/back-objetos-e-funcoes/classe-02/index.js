const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            carro.status();
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            carro.status();
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10;
            carro.status();
        } else {
            console.log("Não é possível acelerar um carro desligado.")
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            this.velocidade -= 10;
            carro.status();
        } else {
            console.log("Não é possível desacelerar um carro desligado.")
        }
    },
    status: function () {
        if (this.ligado) {
            console.log(`- Carro: Ligado
- Velocidade: ${this.velocidade}`)
        }
    }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();