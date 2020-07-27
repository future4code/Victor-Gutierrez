///////////// A
let minhaString: string;

//minhaString = 2; //Erro de compilação.

///////////// B
let meuNumero: number | string; // Aceita dois tipos por meio do union Type
///////////// C
enum CORES_DO_ARCO_IRIS {
  AZUL = 'Azul',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  VERMELHO = 'Vermelho',
  ÍNDIGO = 'Índigo',
  VIOLETA = 'Violeta',
}

interface Pessoa {
  nome: string;
  idade: number;
  corFavorita: CORES_DO_ARCO_IRIS;
}

///////////// D
const pessoa_1: Pessoa = {
  nome: 'Alberto Gusmão',
  idade: 33,
  corFavorita: CORES_DO_ARCO_IRIS.AMARELO,
};

const pessoa_2: Pessoa = {
  nome: 'Flávio Gusmão',
  idade: 47,
  corFavorita: CORES_DO_ARCO_IRIS.LARANJA,
};
