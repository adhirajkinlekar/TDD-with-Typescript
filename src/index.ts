import { NumberParserService } from "./Services/number_parser";
import { StringCalculatorService } from "./Services/string_calculator";

function main(): void {

    const input = "//;\n1;2\n3"; // Example input; replace or gather input dynamically as needed.

    try {

        const stringCalculator = new StringCalculatorService(new NumberParserService());

        const result = stringCalculator.add(input);

        console.log("The result is:", result);
    }
    catch (error: unknown) {

        if (error instanceof Error)  console.error("An error occurred:", error.message);

        else console.error("An unknown error occurred");
    }
}

// Entry point for the application
main(); 

