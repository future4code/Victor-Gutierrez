export enum Ages {
  PREHISTORIA = 'Pré-historia',
  ANTIGA = 'Idade Antiga',
  MEDIA = 'Idade Média',
  MODERNA = 'Idade Moderna',
  ATUAL = 'Idade Contemporânea',
  FUTURO = 'uma idade que ainda não sabemos',
}

export type PrintYearAndAgeType = (year: number, age?: 'DC' | 'AC') => any;
