import { IStringCalculatorService, StringCalculatorService } from '../src/Services/string_calculator';
import { INumberParserService } from '../src/Services/number_parser';

describe('string_calculator_unit_test', () => {

    let calculator: IStringCalculatorService;

    let mockedNumberParserService: jest.Mocked<INumberParserService>;

    beforeEach(() => {
        // Create a mock for NumberParserService
        mockedNumberParserService = {
            parseNumbersFromString: jest.fn()
        };

        // Inject the mocked service into StringCalculatorService
        calculator = new StringCalculatorService(mockedNumberParserService);
    });

    it('should return 0 for an empty array', () => {
        mockedNumberParserService.parseNumbersFromString.mockReturnValue([]);
        expect(calculator.add('')).toBe(0);
    });

    it('should return the single number when only one valid number is provided', () => {
        mockedNumberParserService.parseNumbersFromString.mockReturnValue([42]);
        expect(calculator.add('42')).toBe(42);
    });

    it('should return the sum of numbers when multiple numbers are provided', () => {
        mockedNumberParserService.parseNumbersFromString.mockReturnValue([1, 2, 3, 4]);
        expect(calculator.add('1,2,3,4')).toBe(10);
    });

    it('should throw an exception for negative numbers', () => {
        mockedNumberParserService.parseNumbersFromString.mockReturnValue([1, -2, 3, -4]);
        expect(() => calculator.add('1,-2,3,-4'))
            .toThrow('Negatives not allowed: -2, -4');
    });
});
