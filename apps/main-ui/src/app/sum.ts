export function sum(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function sum2(num1: number, num2: number): number {
  return num1 + num2;
}
