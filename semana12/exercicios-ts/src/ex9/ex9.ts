import { ConvertDNAType } from './ex9.types';

const convertDNA: ConvertDNAType = (dna: string): string => {
  const translatedDNA = dna
    .replace(/A/g, 'U')
    .replace(/T/g, 'A')
    .replace(/C/g, 'X')
    .replace(/G/g, 'C')
    .replace(/X/g, 'G');

  return translatedDNA;
};

export default convertDNA;
