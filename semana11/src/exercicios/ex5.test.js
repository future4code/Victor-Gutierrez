import { uppecaseLetters } from "./ex5";

describe("Uppercase every first letter of words in a sentence", () => {
  it("returns uppercased letters in index 0 of each word ", () => {
    const sentence = "olá, mundo !";

    const result = uppecaseLetters(sentence);

    expect(result).toStrictEqual("Olá, Mundo !");
  });
});
