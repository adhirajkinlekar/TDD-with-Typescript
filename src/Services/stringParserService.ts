
export interface IStringParserService {

    parseNumbers(input: string): number[];
}

export class StringParserService implements IStringParserService{

    public parseNumbers(input: string): number[] {

        const sanitizedInput = this.sanitizeString(input);

        return sanitizedInput
            .map(x => parseInt(x))
            .filter(x => !isNaN(x));
    }

    private sanitizeString(input: string): string[] {

        if (!input) return [];

        let delimiter = ","; // Default delimiter

        // Check if custom delimiter is specified
        if (input.startsWith("//")) {

            // Get the custom delimiter part
            delimiter = input.slice(2, input.indexOf("\n"));

            // Remove the delimiter specifier (e.g., //[delimiter]\n)
            input = input.slice(input.indexOf("\n") + 1); 
        }

        const regex = new RegExp(`[\\n,${delimiter}]`, 'g');

        return input.split(regex).filter(Boolean);
    }
}