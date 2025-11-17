import { Produto } from "./Produto";

export class Livro extends Produto {
  constructor(
    id: number,
    nome: string,
    preco: number,
    private autor: string
  ) {
    super(id, nome, preco);
  }

  public getAutor(): string {
    return this.autor;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }

  public visualizar(): void {
    console.log(
      `📚 ID: ${this.getId()} | Livro: ${this.getNome()} | Autor: ${this.autor} | Preço: R$${this.getPreco().toFixed(2)}`
    );
  }
}