const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [
    ],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: 10000,
        });
        console.log(`Deposito de R$ ${valor / 100},00 realizado para o cliente: Maria`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor: 5000,
            });
            console.log(`Saque de R$ ${valor / 100},00 realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}
Histórico:`);
        for (let item of this.historicos) {
            console.log(`${item.tipo} de R$${item.valor / 100}`);
        }
    }
}

/*contaBancaria.depositar(10000);
contaBancaria.sacar(5000);
contaBancaria.extrato();*/

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();