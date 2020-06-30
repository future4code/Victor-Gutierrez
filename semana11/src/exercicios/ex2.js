function checaPalindromo(frase) {
  return (
    frase.toLowerCase() === frase.split("").reverse().join("").toLowerCase()
  );
}
