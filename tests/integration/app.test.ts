import { IStringCalculatorService, StringCalculatorService } from '../../src/Services/string_calculator';
import { INumberParserService, NumberParserService } from '../../src/Services/number_parser';

describe('app_integration_tests', () => {

    let calculator: IStringCalculatorService;

    beforeEach(() => {

        // Using the real NumberParserService to ensure proper integration
        const numberParserService: INumberParserService = new NumberParserService();
        
        calculator = new StringCalculatorService(numberParserService);
    });

    it('should return 0 for an empty string',
        () => expect(calculator.add('')).toBe(0));

    it('should return the number when a single number is provided',
        () => expect(calculator.add('42')).toBe(42));

    it('should return the sum of numbers delimited by a comma',
        () => expect(calculator.add('1,2,3,4,5')).toBe(15));

    it('should return the sum of numbers separated by commas and new lines',
        () => expect(calculator.add('1\n2,3\n4')).toBe(10));

    it('should handle custom delimiters correctly',
        () => expect(calculator.add('//;\n1;2;3;4')).toBe(10));

    it('should handle multiple custom delimiters',
        () => expect(calculator.add('//|\n1|2|3|4|5')).toBe(15));

    it('should throw an exception for negative numbers and display all negative numbers',
        () => expect(() => calculator.add('1,-2,-3,4,-5'))
            .toThrow('Negatives not allowed: -2, -3, -5'));

    it('should ignore invalid input and only sum valid numbers',
        () => expect(calculator.add('1,abc,3\n4,NaN')).toBe(8));

    it('should work with unusual custom delimiters',
        () => expect(calculator.add('//***\n1***2***3')).toBe(6));

    it('should handle input with numbers and extra whitespace',
        () => expect(calculator.add(' 1, 2 , 3 \n 4')).toBe(10));
});
