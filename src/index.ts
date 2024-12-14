// StringCalculator.ts

import { sanitizeString } from "./util";

export class StringCalculator {

    public add(numbers: string): number {

        if (numbers === "") return 0;

        const parsedNumbers: number[] = sanitizeString(numbers).map((x) => parseInt(x));

        if (parsedNumbers.length == 1) return parsedNumbers[0];

        return parsedNumbers.reduce((acc, num) => acc + num, 0);
    }
}
 