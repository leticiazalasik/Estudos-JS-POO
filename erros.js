//Tratamento de erros personalizados 

// Função para tratar a divisão e erros adequados
function dividir(a, b) {
    // Verifica se 'a' e 'b' são números
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Erro: Todas as variáveis precisam ser números!');
    }

    // Verifica se 'b' é zero
    if (b === 0) {
        throw new Error('Erro: b não pode ser igual a zero');
    }

    // Só chega aqui se não houver erro
    let resultadoDivisao = a / b;

    // Retorna o resultado da divisão
    return resultadoDivisao;
}




const usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 }
];

//Debug com Console
function processarDados(dados) {

    if (!Array.isArray(dados)) {
        console.error("Erro: Os dados precisam ser um array.");
        return;
    } else {
// Tempo de execução
console.time("Exibindo a tabela de usuários");

// Exibe a tabela
console.table(dados);

// Finaliza o timer e exibe o tempo de execução
console.timeEnd("Exibindo a tabela de usuários");
}
}

processarDados(usuarios);