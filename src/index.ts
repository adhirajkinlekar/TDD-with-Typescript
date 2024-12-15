import { IStringParserService, StringParserService } from "./Services/stringParserService";

export interface IStringCalculator {

    add(numbers: string): number;
}

export class StringCalculator implements IStringCalculator {

    // Dependency injection could be used here, but keeping the setup simple for this test.
    private readonly stringParserService: IStringParserService;

    constructor(stringParserService: IStringParserService) {

        this.stringParserService = stringParserService
    }

    public add(numbers: string): number {

        // Parse the string and get the numbers
        const parsedNumbers = this.stringParserService.parseNumbers(numbers);

        // if input consist of an empty string or invalid input, return 0
        if (parsedNumbers.length === 0) return 0;

        this.checkForNegatives(parsedNumbers);

        // If there's only one number, return it directly
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

function runProgram(numbers: string): void {
    try {

        const stringParserService: IStringParserService = new StringParserService();

        const stringCalculator: IStringCalculator = new StringCalculator(stringParserService);

        const result = stringCalculator.add(numbers);

        console.log(result);
    }
    catch (error: unknown) {

        if (error instanceof Error) console.log('An error occurred:', error.message);

        else console.log('An unknown error occurred');
    }
}


// Example usage

runProgram('//;\n1,2\n3');


