import { Livro } from "../model/Livro";

export class ProdutoController {
  private produtos: Livro[] = [];

  public cadastrar(produto: Livro): void {
    this.produtos.push(produto);
    console.log(" Produto cadastrado com sucesso!");
  }

  public listar(): void {
    if (this.produtos.length === 0) {
      console.log(" Nenhum produto cadastrado.");
      return;
    }

    console.log(" Lista de Produtos:");
    this.produtos.forEach((p) => p.visualizar());
  }

  public atualizar(id: number, novoProduto: Livro): void {
    const index = this.produtos.findIndex((p) => p.getId() === id);
    if (index !== -1) {
      this.produtos[index] = novoProduto;
      console.log(" Produto atualizado com sucesso!");
    } else {
      console.log(" Produto não encontrado.");
    }
  }

  public deletar(id: number): void {
    const index = this.produtos.findIndex((p) => p.getId() === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(" Produto removido com sucesso!");
    } else {
      console.log(" Produto não encontrado.");
    }
  }
}