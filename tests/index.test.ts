import { IStringCalculator, StringCalculator } from '../src/index';
import { IStringParserService, StringParserService } from '../src/Services/stringParserService';

describe('StringCalculator', () => {

    let calculator: IStringCalculator;

    beforeEach(() => {

        // Using the real StringParserService to keep the test simple and focus on StringCalculator's behavior.
        const stringParserService: IStringParserService = new StringParserService();

        calculator = new StringCalculator(stringParserService);
    });

    it('should return 0 for an empty string',
        () => expect(calculator.add('')).toBe(0));

    it('should return the number when a single number is provided',
        () => expect(calculator.add('1')).toBe(1));

    it('should return the sum of numbers delimited by a comma',
        () => expect(calculator.add('1,2,3')).toBe(6));

    it('should return the sum of numbers separated by commas and new lines',
        () => expect(calculator.add('1\n2,3')).toBe(6));

    it('should return the sum of numbers separated by custom delimiters and new lines',
        () => expect(calculator.add('//;\n1,2\n3')).toBe(6));

    it('should throw an exception when called with negative numbers', () => expect(
        () => calculator.add("//,\n-1,-2,3,-4")).toThrow("Negatives not allowed: -1, -2, -4"));
});
