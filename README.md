# 📘 React String Calculator

A simple **React-based String Calculator** implementing **TDD (Test-Driven Development)** principles. This calculator parses numeric strings, handles custom delimiters, and ignores invalid inputs.

---

## 🚀 Features
- Supports **comma (`,`)** and **newline (`\n`)** as default delimiters.
- Allows **custom delimiters** using `//[delimiter]\n[numbers]` format.
- Ignores invalid inputs and handles **negative numbers with an error message**.
- Fully tested with **Jest and React Testing Library**.

---

## 📂 Project Setup

### 🔹 Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### 🔹 Installation Steps
1. **Clone the Repository**
   ```sh
   git clone git@github.com:rpanchal292/react-string-calculator.git
   cd react-string-calculator
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Project**
   ```sh
   npm start
   ```
   The application will start at `http://localhost:3000/`

---

## 🎯 Usage

1. Enter a string of numbers in the text box, separated by commas `,` or new lines `\n`.
2. Click the **Calculate Sum** button.
3. The result will be displayed below.

### ✅ **Example Inputs & Outputs**
| Input | Output |
|----------------|--------|
| `""` | `0` |
| `"1"` | `1` |
| `"1,5"` | `6` |
| `"1\n2,3"` | `6` |
| `"//;\n1;2"` | `3` |
| `"1,2,3,4"` | `10` |
| `"-1,2,-3"` | Error: `Negative numbers not allowed: -1, -3` |

---

## 🛠 Running Tests
This project uses **Jest** for testing.

To run tests:
```sh
npm test
```

---

## 🛠 Troubleshooting
- If `npm start` doesn’t show anything, try clearing the cache:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  npm start
  ```

- If port **3000** is busy, change it in `package.json`:
  ```json
  "scripts": {
    "start": "PORT=4000 react-scripts start"
  }
  ```


