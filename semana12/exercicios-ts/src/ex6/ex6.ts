import { PrintYearAndAgeType, Ages } from './ex6.types';

const printYearAndAge: PrintYearAndAgeType = (year, age = 'DC') => {
  const outputString = `${year} ${age} pertence à`;

  if (year >= 4001 && year < 100000) {
    return age === 'DC'
      ? `${outputString} ${Ages.FUTURO}`
      : `${outputString} ${Ages.PREHISTORIA}`;
  } else if (year >= 0 && year < 475) {
    return `${outputString} ${Ages.ANTIGA}`;
  } else if (year >= 475 && year <= 1451) {
    return age === 'DC'
      ? `${outputString} ${Ages.MEDIA}`
      : `${outputString} ${Ages.ANTIGA}`;
  } else if (year >= 1452 && year < 1788) {
    return age === 'DC'
      ? `${outputString} ${Ages.MODERNA}`
      : `${outputString} ${Ages.ANTIGA}`;
  } else if (year >= 1788 && year <= 2020) {
    return age === 'DC'
      ? `${outputString} ${Ages.ATUAL}`
      : `${outputString} ${Ages.ANTIGA}`;
  } else if (year > 2020) {
    return age === 'DC'
      ? `${outputString} ${Ages.FUTURO}`
      : `${outputString} ${Ages.ANTIGA}`;
  }
};

export default printYearAndAge;
