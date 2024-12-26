import { INumberParserService } from "./number_parser";

export interface IStringCalculatorService {

    add(numbers: string): number;
}

export class StringCalculatorService implements IStringCalculatorService {

    private readonly numberParserService: INumberParserService;

    constructor(numberParserService: INumberParserService) {

        this.numberParserService = numberParserService
    }

    public add(numbers: string): number {

        const parsedNumbers = this.numberParserService.parseNumbersFromString(numbers);

        if (parsedNumbers.length === 0) return 0;

        this.checkForNegatives(parsedNumbers);

        if (parsedNumbers.length === 1) return parsedNumbers[0];

        return this.getSum(parsedNumbers);
    }

    private checkForNegatives(numbers: number[]): void {

        const negatives = numbers.filter(num => num < 0);

        if (negatives.length) throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    private getSum(numbers: number[]): number {

        return numbers.reduce((acc, num) => acc + num, 0);
    }
}  

