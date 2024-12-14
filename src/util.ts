export const sanitizeString = (input: string): string[] => {

    if (!input) return [];

    let delimiter = ","; // Default delimiter

    // Check if the input starts with a custom delimiter declaration
    if (input.startsWith("//")) {
        // Extract the custom delimiter from the first line (after "//" and before "\n")
        delimiter = input.slice(2, input.indexOf("\n"));
        
        // Remove the "//[delimiter]\n" part from the input
        input = input.slice(input.indexOf("\n") + 1);
    }

    // Use split to break the string at the custom delimiter or default (comma) and newlines
    const regex = new RegExp(`[\\n,${delimiter}]`, 'g');
    
    // Replace the delimiters and newlines with an empty string and filter out empty values
    return input.split(regex).filter(Boolean);
}
