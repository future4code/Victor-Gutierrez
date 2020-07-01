export interface Task {
    text: string;
    day:
      | 'Domingo'
      | 'Segunda-feira'
      | 'Terça-feira'
      | 'Quarta-feira'
      | 'Quinta-feira'
      | 'Sexta-feira'
      | 'Sábado';
  }