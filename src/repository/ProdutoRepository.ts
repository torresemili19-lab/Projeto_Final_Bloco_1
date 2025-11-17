// src/repository/ProdutoRepository.ts
import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  cadastrar(produto: Produto): void;
  listar(): Produto[];
  atualizar(produto: Produto): void;
  deletar(id: number): void;
  buscarPorId(id: number): Produto | undefined;
}