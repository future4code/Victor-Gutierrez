import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    //preparação
    const ano = 1996;
    //execução
    const resultado = checaBissexto(ano);
    // verificação
    expect(resultado).toBe(true);
  });

  test("retorna true pra 2008", () => {
    //preparação
    const ano = 2008;
    //execução
    const resultado = checaBissexto(ano);

    //verficação
    expect(resultado).toBe(true);
  });

  test("retorna false pra 2007", () => {
    //preparação
    const ano = 2007;
    //execução
    const resultado = checaBissexto(ano);

    //verficação
    expect(resultado).toBe(false);
  });

  test("retorna false para 1", () => {
    //preparação
    const ano = 1;
    //execução
    const resultado = checaBissexto(ano);
    //verificação
    expect(resultado).toBe(false);
  });

  test("retorna false para `olá` ", () => {
    //preparação
    const ano = "olá";
    //execução
    const resultado = checaBissexto(ano);
    //verificação
    expect(resultado).toBe(false);
  });
});
