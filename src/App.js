import React, { useState } from "react";
import "./index.css"; // Import the CSS file

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const sumNumbers = (inputString) => {
    if (inputString.trim() === "") return 0; 

    inputString = inputString.replace(/^["']|["']$/g, ""); 
    inputString = inputString.replace(/\\n/g, "\n"); 

    let separator = /,|\n/; 

    if (inputString.startsWith("//")) {
      const delimiterEnd = inputString.indexOf("\n");
      const delimiter = inputString.substring(2, delimiterEnd);
      separator = new RegExp(delimiter);
      inputString = inputString.substring(delimiterEnd + 1);
    }

    const numList = inputString
      .split(separator)
      .map(value => (value.trim() !== "" ? Number(value) : NaN));

    if (numList.includes(NaN)) {
      throw new Error("Invalid input: Contains non-numeric values");
    }

    const negativeValues = numList.filter(num => num < 0);
    if (negativeValues.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeValues.join(", ")}`);
    }

    return numList.reduce((sum, num) => sum + num, 0);
  };

  const handleCalculate = () => {
    try {
      setError(""); 
      setResult(sumNumbers(inputValue)); 
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder='Enter numbers'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>

      {error && <p className="error">{error}</p>}
      {result !== null && <h2 className="result">Result: {result}</h2>}
    </div>
  );
};

export default App;
