# String Calculator

This project implements a simple string calculator in TypeScript. It supports parsing and summing numbers from strings with various delimiters and provides test coverage to ensure correctness.

## Problem statement
https://blog.incubyte.co/blog/tdd-assessment/

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 
- **npm**

## Installation

Clone the repository:

```bash
git clone <repository_url>
cd string_calculator
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

- Successful tests will show green checkmarks (✔).
- Failed tests will display red crosses (❌) along with the details of the failure.

## Project Structure

- `src/`: Contains the main application source code.
- `dist/`: Contains the compiled JavaScript files after running `npm run build`.
- `tests/`: Contains the test cases for the application.
- `package.json`: Defines the project dependencies and scripts.
