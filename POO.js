class Produto {
    constructor(nome, preco) {
        this.nome = nome; // Propriedade
        this.preco = preco;
    }

    // Método para aplicar desconto ao preço do produto
    concederDesconto() {
        return calcularDesconto(this);
    }
}

// Função para calcular o desconto
function calcularDesconto(produto) {
    const desconto = produto.preco * 0.10;
    const precoComDesconto = produto.preco - desconto;
    return precoComDesconto;
}

// Criando um objeto
const smartphone = new Produto("smartphone", 2000);

console.log(smartphone); // Exibe o objeto produto

// Chamando o método concederDesconto para calcular o preço com desconto
console.log(smartphone.concederDesconto()); // Deve retornar 1800