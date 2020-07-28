import { GetFatorialType } from './ex11.types';

const getFatorial: GetFatorialType = (num) => {
  if (num === 0) {
    return 1;
  } else {
    let multiplication = 1;

    for (let index = 1; index < num + 1; index++) {
      multiplication *= index;
    }

    return multiplication;
  }
};

export default getFatorial;
