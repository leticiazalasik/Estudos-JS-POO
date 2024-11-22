//Biblioteca com métodos para adicionar e listar livros. Use encapsulamento para proteger a lista de livros.

class Biblioteca {
  #livros = [];

  adicionarLivro(livro) {
    if (livro instanceof Livro) {
      this.#livros.push(livro);
    } else {
      console.log('Erro: O objeto não é um livro');
    }
  }

  listarLivros() {
    if (this.#livros.length > 0) {
      this.#livros.forEach((livro, index) => {
        console.log(`${index + 1} - ${livro.titulo} - ${livro.autor}`);
      });
    } else {
      console.log('A biblioteca está vazia.');
    }
  }
}

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo; // Propriedade
    this.autor = autor;
    this.ano - ano;
  }
}

const livro1 = new Livro('teste titulo', 'Autor teste', 1949);
const livro2 = new Livro('titulo hipotético dois', 'Autor hipotético 2', 1997);
const livro3 = new Livro('teste titulo', 'Autor teste', 1949);


const bibliotecaNova = new Biblioteca();
bibliotecaNova.adicionarLivro(livro1);
bibliotecaNova.adicionarLivro(livro2);
bibliotecaNova.adicionarLivro(livro3);


bibliotecaNova.listarLivros();
