import React, { useState } from "react";
import "../assets/css/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>
          C
        </button>
        <button id="numbers" onClick={() => handleClick("1")}>
          1
        </button>
        <button id="numbers" onClick={() => handleClick("2")}>
          2
        </button>
        <button id="numbers" onClick={() => handleClick("3")}>
          3
        </button>
        <button id="operators" onClick={() => handleClick("+")}>
          +
        </button>
        <button id="numbers" onClick={() => handleClick("4")}>
          4
        </button>
        <button id="numbers" onClick={() => handleClick("5")}>
          5
        </button>
        <button id="numbers" onClick={() => handleClick("6")}>
          6
        </button>
        <button id="operators" onClick={() => handleClick("-")}>
          -
        </button>
        <button id="numbers" onClick={() => handleClick("7")}>
          7
        </button>
        <button id="numbers" onClick={() => handleClick("8")}>
          8
        </button>
        <button id="numbers" onClick={() => handleClick("9")}>
          9
        </button>
        <button id="operators" onClick={() => handleClick("*")}>
          *
        </button>
        <button id="numbers" onClick={() => handleClick("0")}>
          0
        </button>
        <button id="equal" onClick={handleCalculate}>
          =
        </button>
        <button id="operators" onClick={() => handleClick("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
