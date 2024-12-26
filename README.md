# TDD with Typescript

This project implements a simple string calculator in TypeScript. It supports parsing and summing numbers from strings with various delimiters and provides test coverage to ensure correctness. The development process has followed **Test-Driven Development (TDD)** principles, with incremental commits showcasing the working and evolution of the code alongside its tests.

## Problem statement

Create a simple **String Calculator** that can sum a string of numbers. The method signature should be:

```typescript
function add(numbers: string): number 
```

### Requirements

The `add` method should take a string of comma-separated numbers and return an integer, which is the sum of the numbers. The calculator should handle the following scenarios:

#### 1. Empty String:
- If the input string is empty, return `0`.
  
  **Example:**
  - Input: `""`  
  - Output: `0`

#### 2. Single Number:
- If the input string contains a single number, return that number as an integer.
  
  **Example:**
  - Input: `"1"`  
  - Output: `1`

#### 3. Multiple Numbers:
- If the input string contains multiple numbers separated by commas or new lines, return the sum of those numbers.
  
  **Example:**
  - Input: `"1,5"`  
  - Output: `6`
  
  - Input: `"1\n2,3"`  
  - Output: `6`

#### 4. Custom Delimiters:
- The delimiter can be customized by including a special line at the beginning of the string.
- The format for this is `//[delimiter]\n[numbers]`. The delimiter can be any single character or sequence.
  
  **Example:**
  - Input: `"//;\n1;2"`  
  - Output: `3` (Delimiter is `;`)

#### 5. Negative Numbers:
- If any negative numbers are present in the input string, throw an exception.
- The exception message should indicate which negative numbers were found.
- If there are multiple negative numbers, list them in the exception message, separated by commas.
  
  **Example:**
  - Input: `"1,-2,3,-4"`  
  - Output: Exception with message: `Negative numbers not allowed: -2, -4`

### Notes:
- The `add` method should handle any amount of numbers.
- Always refactor the code after each passing test to improve its readability and maintainability.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 
- **npm**

## Installation

Clone the repository:

```bash
git clone <repository_url>
cd TDD-with-Typescript
```

Install the dependencies:

```bash
npm install
```

## Building the Project

To compile the TypeScript code to JavaScript:

```bash
npm run build
```

The compiled files will be placed in the `dist/` directory.

## Running the Application

To run the main application:

```bash
npm start
```

This executes the `dist/src/index.js` file, which is the entry point of the application.

## Running Tests

The project uses **Jest** for testing. To run all tests:

```bash
npm test
```

This will execute the test cases and display the results in the terminal.

### Test Output

- Successful tests will show green checkmarks (✅).
- Failed tests will display red crosses (❌) along with the details of the failure.

## Project Structure

- `src/`: Contains the main application source code.
- `dist/`: Contains the compiled JavaScript files after running `npm run build`.
- `tests/`: Contains the test cases for the application.
- `package.json`: Defines the project dependencies and scripts.
