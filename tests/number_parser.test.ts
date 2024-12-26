import { NumberParserService } from '../src/Services/number_parser';

describe('number_parser_unit_test', () => {

    let numberParserService: NumberParserService;

    beforeEach(() => numberParserService = new NumberParserService());

    it('should return an empty array for an empty string',
        () => expect(numberParserService.parseNumbersFromString('')).toEqual([]));

    it('should ignore invalid values and return only valid numbers',
        () => expect(numberParserService.parseNumbersFromString('1,abc,3\n4')).toEqual([1, 3, 4]));

    it('should handle input with whitespace correctly',
        () => expect(numberParserService.parseNumbersFromString(' 1 , 2 ,3 \n 4')).toEqual([1, 2, 3, 4]));

    it('should parse multiple numbers separated by commas',
        () => expect(numberParserService.parseNumbersFromString('1,2,3')).toEqual([1, 2, 3]));

    it('should parse numbers separated by new lines and commas',
        () => expect(numberParserService.parseNumbersFromString('1\n2,3')).toEqual([1, 2, 3]));

    it('should parse numbers with a custom delimiter',
        () => expect(numberParserService.parseNumbersFromString('//;\n1;2;3')).toEqual([1, 2, 3]));

    it('should parse numbers with a custom multi-character delimiter',
        () => expect(numberParserService.parseNumbersFromString('//***\n1***2***32')).toEqual([1, 2, 32]));

    it('should parse numbers with a custom unique multi-character delimiter',
        () => expect(numberParserService.parseNumbersFromString('//*,%\n1*2%6')).toEqual([1, 2, 6]));
});
 