import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("Retorna true para repetição de um número", () => {
    //preparação
    const arrayDeItens = [1, 4, 6, 8, 9, 9];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(true);
  });

  it("Retorna true para repetição de mais um número", () => {
    //preparação
    const arrayDeItens = [5, 5, 3, 6, 5, 6];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(true);
  });

  it("Retorna false para a ausência de repetição", () => {
    //preparação
    const arrayDeItens = [4, 3, 2, 1];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(false);
  });

  it("Retorna true para repetição intercalada", () => {
    //preparação
    const arrayDeItens = [-1, 3, 4, 5, 6, 7, 8, -1, 10];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(true);
  });

  it("Retorna false para repetição de strings", () => {
    //preparação
    const arrayDeItens = ["a", "b", "a"];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(false);
  });

  it("Retorna true para repetição de Floats", () => {
    //preparação
    const arrayDeItens = [1.3, 3.982, 1.32341, 1.4, 1.3];
    //execução
    const resultado = checaItensDuplicados(arrayDeItens);
    //verificação
    expect(resultado).toBe(true);
  });
});
