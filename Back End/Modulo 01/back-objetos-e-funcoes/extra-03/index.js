const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
    Total de itens: ${this.calcularTotalDeItens()}
    Total a pagar: ${this.calcularTotalAPagar() / 100}`);
    },
    addProduto: function (produto) {
        let tinha = false;
        for (let i = 0; i <= this.produtos.length - 1; i++) {
            if (produto.nome === this.produtos[i].nome) {
                this.produtos[i].qtd += produto.qtd;
                tinha = true;
            }
        }
        if (!tinha) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        `);
        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} - R$ ${item.qtd * item.precoUnit / 100}`);
        }
        console.log('');
        console.log(`Total de itens: ${this.calcularTotalDeItens()}
Total a pagar: ${this.calcularTotalAPagar() / 100}`);
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (let item of this.produtos) {
            totalDeItens += item.qtd;
        }
        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        totalAPagar = 0;
        for (let item of this.produtos) {
            totalAPagar += item.precoUnit * item.qtd;
        }
        return totalAPagar;
    },
    calcularDesconto: function () {
        let qtdTotalDeItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();
        let descontoPorItens = 0;
        let descontoPorTotal = 0;
        if (qtdTotalDeItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit;
            for (let i = 1; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < descontoPorItens) {
                    descontoPorItens = this.produtos[i].precoUnit;
                }
            }
        }
        if (totalAPagar > 100) {
            descontoPorTotal = totalAPagar / 10;
        }
        console.log(`Desconto: R$ ${(descontoPorItens > descontoPorTotal ? descontoPorItens / 100 : descontoPorTotal / 100)}`);
    }
}
carrinho.calcularDesconto();
carrinho.imprimirDetalhes();

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.calcularDesconto();
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);
carrinho.calcularDesconto();
carrinho.imprimirResumo();