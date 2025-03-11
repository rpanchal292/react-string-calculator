# React String Calculator

A simple React app that implements a **String Calculator** supporting different delimiters, newline-separated numbers, and error handling for negative numbers.

## 📌 Features

- Supports comma `,` and newline `\n` as delimiters.
- Allows custom delimiters using `//[delimiter]\n[numbers...]`.
- Throws an error for negative numbers.
- Ignores non-numeric inputs.

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/rpanchal292/react-string-calculator.git
cd react-string-calculator
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Application

```sh
npm start
```

Then open **[http://localhost:3000/](http://localhost:3000/)** in your browser.

## 📚 Usage

1. Enter a string of numbers separated by commas, new lines, or a custom delimiter.
2. Click the **Calculate Sum** button.
3. View the result below.

### 🔹 Examples

| Input      | Output                                      |   |    |   |
| ---------- | ------------------------------------------- | - | -- | - |
| ""         | 0                                           |   |    |   |
| "1"        | 1                                           |   |    |   |
| "1,2"      | 3                                           |   |    |   |
| "1\n2,3"   | 6                                           |   |    |   |
| "//;\n1;2" | 3                                           |   |    |   |
| "//        | \n1                                         | 2 | 3" | 6 |
| "-1,2,-3"  | Error: Negative numbers not allowed: -1, -3 |   |    |   |

## ❌ Error Handling

- **Non-numeric input** → Ignored.
- **Negative numbers** → Throws an error listing all negatives.
- **Empty input** → Returns `0`.