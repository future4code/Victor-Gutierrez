export function checaItensDuplicados(array) {
  return new Set(array).size !== array.length;

  //nunca tinha visto esse Set na minha vida... vou pesquisar mais sobre isso.

  /* ou can do this using a Set. You have to create a Set and put all the values in your Array, in that Set.
  Then, you check whether they have the same length or not. If not, you know there are duplicate values, because a Set can only have unique values. 
  */

  /* Set é um constructor  de um objeto que só armazena valores únicos de cada tipo */

/* Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values. */
  
  // Aqui ele está comparando o seu tamanho com o tamanho da array pura, uma vez que o Set não aceita valores repetidos, e retornando true ou false.
}
