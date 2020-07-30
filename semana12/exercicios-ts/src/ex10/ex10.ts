import { ReversorType } from './ex10.types';

const reversor: ReversorType = (text) => {
  const reversed = text.split('').reverse().join('');

  return reversed;
};

export default reversor;
