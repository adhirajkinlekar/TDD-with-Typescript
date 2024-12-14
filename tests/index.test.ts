// StringCalculator.test.ts
import { StringCalculator } from '../src/index';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number when a single number is provided', () => {
    expect(calculator.add('1')).toBe(1);
  });
});
