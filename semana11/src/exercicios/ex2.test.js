import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para `arara`", () => {
    //preparação
    const item = "arara";
    //execução
    const result = checaPalindromo(item);
    //verificação
    expect(result).toBe(true);
  });

  it("retorna true para `asa`", () => {
    //preparação
    const item = "asa";
    //execução
    const result = checaPalindromo(item);
    //verificação
    expect(result).toBe(true);
  });

  it("retorna false para `Socorram-me subi no onibus em marrocos`", () => {
    //preparação
    const item = "Socorram-me subi no onibus em marrocos";
    //execução
    const result = checaPalindromo(item);
    //verificação
    expect(result).toBe(false);
    //Palindrono que retornou false ! ! !
  });

  it("retorna true para `Asa`", () => {
    //preparação
    const item = "Asa";
    //execução
    const result = checaPalindromo(item);
    //verificação
    expect(result).toBe(false);
    //Asa é um palindromo porém a função não entende as diferenças de case.
  });
});
