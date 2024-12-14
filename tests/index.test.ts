// https://blog.incubyte.co/blog/tdd-assessment/

import { StringCalculator } from '../src/index';

describe('StringCalculator', () => {

    let calculator: StringCalculator;

    beforeEach(() => calculator = new StringCalculator());

    it('should return 0 for an empty string',
        () => expect(calculator.add('')).toBe(0));

    it('should return the number when a single number is provided',
        () => expect(calculator.add('1')).toBe(1));

    it('should return the sum of numbers delimited by a comma',
        () => expect(calculator.add("1,2,3")).toBe(6));

    it('should return the sum of numbers separated by commas and new lines',
        () => expect(calculator.add("1\n2,3")).toBe(6));

    it('should return the sum of numbers separated by custom delimeters and new lines',
        () => expect(calculator.add("//~~\n1,2,3")).toBe(6));
});                                 
