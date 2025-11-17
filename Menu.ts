import * as readline from "readline-sync";
import { Livro } from "./projeto_final_bloco_01/src/model/Livro";
import { ProdutoController } from "./projeto_final_bloco_01/src/Controller/Produtocontroller";

const controller = new ProdutoController();

function menu(): void {
  let opcao: number;

  do {
    console.log("\n=== E-COMMERCE DE LIVROS ===");
    console.log("1 - Cadastrar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Atualizar Livro");
    console.log("4 - Deletar Livro");
    console.log("0 - Sair");
    opcao = readline.questionInt("Escolha um: ");

    switch (opcao) {
      case 1:
        const id = readline.questionInt("ID: ");
        const nome = readline.question("Nome do livro: ");
        const preco = readline.questionFloat("Preço: ");
        const autor = readline.question("Autor: ");
        const livro = new Livro(id, nome, preco, autor);
        controller.cadastrar(livro);
        break;

      case 2:
        controller.listar();
        break;

      case 3:
        const idAtualizar = readline.questionInt("ID do livro a atualizar: ");
        const novoNome = readline.question("Novo nome: ");
        const novoPreco = readline.questionFloat("Novo preço: ");
        const novoAutor = readline.question("Novo autor: ");
        const livroAtualizado = new Livro(idAtualizar, novoNome, novoPreco, novoAutor);
        controller.atualizar(idAtualizar, livroAtualizado);
        break;

      case 4:
        const idDeletar = readline.questionInt("ID do livro a deletar: ");
        controller.deletar(idDeletar);
        break;

      case 0:
        console.log(" Encerrando o sistema...");
        break;

      default:
        console.log(" Opção inválida.");
    }
  } while (opcao !== 0);
}

menu();