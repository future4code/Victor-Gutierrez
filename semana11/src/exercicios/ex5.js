export const uppecaseLetters = (sentence) => {
  const separate = sentence.split(" ");
  const items = [];

  for (let item of separate) {
    items.push(item.charAt(0).toUpperCase() + item.substring(1));
  }

  return items.join(" ");
};

console.log(uppecaseLetters("olá, mundo !"));
