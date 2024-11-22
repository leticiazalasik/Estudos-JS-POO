//Funcionario com as propriedades nome e salario. Crie uma subclasse Gerente que adicione um bônus ao salário.

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome; // Propriedade
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    adicionarBonusSalario() {
        this.salario=this.salario+200;
    }
}

const gerentePaulo = new Gerente("Paulo",4000);
console.log(gerentePaulo.salario)
gerentePaulo.adicionarBonusSalario();
console.log(gerentePaulo.salario)
