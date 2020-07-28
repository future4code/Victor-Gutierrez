import { PostList } from './ex3.types';

export const posts: PostList = [
  {
    autor: 'Alvo Dumbledore',
    texto: 'Não vale a pena viver sonhando e se esquecer de viver',
  },
  {
    autor: 'Severo Snape',
    texto: 'Menos 10 pontos para Grifinória!',
  },
  {
    autor: 'Hermione Granger',
    texto: 'É levi-ô-sa, não levio-sá!',
  },
  {
    autor: 'Dobby',
    texto: 'Dobby é um elfo livre!',
  },
  {
    autor: 'Lord Voldemort',
    texto: 'Avada Kedavra!',
  },
];

export function buscarPostsPorAutor(
  listaDePosts: PostList,
  autorInformado: string
): PostList {
  return listaDePosts.filter((post) => {
    //A tipagem Post já foi inferida pelo próprio TypeScript
    return post.autor === autorInformado;
  });
}
