import { OperateOutput } from './ex5.types';

const operate = (num1: number, num2: number): OperateOutput => {
  const sum = num1 + num2;
  const multiplication = num1 * num2;
  const subtraction = num1 > num2 ? num1 - num2 : num2 - num1;
  const biggest = num1 > num2 ? num1 : num2;

  return {
    sum: sum,
    subtraction: subtraction,
    multiplication: multiplication,
    biggest: biggest,
  };
};

export default operate;
