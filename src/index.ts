// StringCalculator.ts

export class StringCalculator {

    public add(numbers: string): number {
        
        if (numbers === "") return 0; 

        const parsedNumbers: number[] = numbers.split(/[\n,]/).map((x)=> parseInt(x));

        if(parsedNumbers.length == 1) return parsedNumbers[0];

        return parsedNumbers.reduce((acc, num) => acc + num, 0);
    }
  }
  