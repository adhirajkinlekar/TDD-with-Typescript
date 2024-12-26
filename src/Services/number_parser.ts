import { defaultDelimiter } from "../util/constants";

export interface INumberParserService {
    parseNumbersFromString(input: string): number[];
}

export class NumberParserService implements INumberParserService {

    public parseNumbersFromString(input: string): number[] {

        const formattedNumbers = this.getFormattedNumbers(input);

        return this.validateNumbers(formattedNumbers);  
    }

    private getFormattedNumbers(input: string): string[] {

        if (!input) return []; 
 
        if (input.startsWith("//")) {

            const customDelimiters = input.slice(2, input.indexOf("\n")).split(",");

            input = input.slice(input.indexOf("\n") + 1); 

            customDelimiters.forEach(delimiter => input = input.split(delimiter).join(defaultDelimiter));
        }

        input = input.split("\n").join(defaultDelimiter);

        return input.split(defaultDelimiter);
    }

    private validateNumbers(input: string[]): number[] {

        return input.map(x => parseInt(x)).filter(x => !isNaN(x));
    }
}
