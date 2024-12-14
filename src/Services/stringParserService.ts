
export interface IStringParserService {

    parseNumbers(input: string): number[];
}

export class StringParserService implements IStringParserService{

    // Method to parse numbers from the input string
    public parseNumbers(input: string): number[] {

        const sanitizedInput = this.sanitizeString(input);

        return sanitizedInput
            .map(x => parseInt(x))
            .filter(x => !isNaN(x));
    }

    // Method to sanitize the input string and extract the numbers
    private sanitizeString(input: string): string[] {

        if (!input) return [];

        let delimiter = ","; // Default delimiter

        // Check if custom delimiter is specified
        if (input.startsWith("//")) {

            delimiter = input.slice(2, input.indexOf("\n"));

            input = input.slice(input.indexOf("\n") + 1); // Remove the delimiter part
        }

        const regex = new RegExp(`[\\n,${delimiter}]`, 'g');

        return input.split(regex).filter(Boolean);
    }
}