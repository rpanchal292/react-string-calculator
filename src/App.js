import { useState } from "react";

export default function StringCalculatorApp() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateSum = () => {
    try {
      setError("");
      setResult(sumNumbers(inputValue));
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>

      <input
        type="text"
        placeholder="Enter numbers"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-80 p-2 border rounded shadow-sm"
      />

      <button
        onClick={calculateSum}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
      >
        Calculate
      </button>

      {result !== null && (
        <p className="mt-3 text-lg font-semibold text-green-600">
          Result: {result}
        </p>
      )}

      {error && <p className="mt-3 text-lg text-red-500">{error}</p>}
    </div>
  );
}

function sumNumbers(inputString) {
  if (inputString === "") return 0;

  let separator = /,|\n/;

  if (inputString.startsWith("//")) {
    const parts = inputString.split("\n");
    separator = new RegExp(parts[0].substring(2));
    inputString = parts.slice(1).join("\n");
  }

  const numList = inputString.split(separator).map(num => Number(num.trim()));

  if (numList.some(isNaN)) {
    throw new Error("Invalid input: Contains non-numeric values");
  }

  const negatives = numList.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numList.reduce((sum, num) => sum + num, 0);
}
