// myModule.ts
import { add, multiply } from './math';

export const myFunction = (a: number, b: number): number => {
  const sum = add(a, b);
  const product = multiply(a, b);
  return sum + product;
};
