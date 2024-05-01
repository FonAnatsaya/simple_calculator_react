import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [displayNum, setDisplayNum] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [lastNum, setLastNum] = useState("");

  const handleButton = (num) => {
    if (!operator) {
      const newNum = displayNum === "0" ? num : displayNum + num;
      setDisplayNum(newNum);
      setFirstNum((prev) => prev + num);
    } else {
      setDisplayNum(lastNum + num);
      setLastNum((prev) => prev + num);
    }
  };

  const handlePointButton = (point) => {
    if (!operator) {
      if (displayNum === "0") {
        setDisplayNum("0.");
        setFirstNum("0.");
      }
      if (!displayNum.includes(".") && displayNum !== "0")
        setDisplayNum((prev) => prev + point);
      setFirstNum((prev) => prev + point);
    } else {
      if (displayNum === "0") {
        setDisplayNum("0.");
        setLastNum("0.");
      }
      if (!displayNum.includes(".") && displayNum !== "0")
        setDisplayNum((prev) => prev + point);
      setLastNum((prev) => prev + point);
    }
  };

  const handleOperatorButtom = (opt) => {
    setOperator(opt);
  };

  const handleEqualButton = () => {
    const num1 = parseFloat(firstNum);
    console.log(num1);
    const num2 = parseFloat(lastNum);
    let result = 0;
    if (operator === "+") {
      result = num1 + num2;
    }
    if (operator === "-") {
      result = num1 - num2;
    }
    setDisplayNum(result);
    setOperator(null);
  };

  return (
    <table className="calculator">
      <thead className="calculator__head">
        <tr>
          <th colSpan="4">{displayNum}</th>
        </tr>
      </thead>
      <tbody className="calculator__body">
        <tr>
          <td>
            <button onClick={() => handleButton("7")}>7</button>
          </td>
          <td>
            <button onClick={() => handleButton("8")}>8</button>
          </td>
          <td>
            <button onClick={() => handleButton("9")}>9</button>
          </td>
          <td>
            <button onClick={() => handleOperatorButtom("+")}>+</button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button onClick={() => handleButton("4")}>4</button>
          </td>
          <td>
            <button onClick={() => handleButton("5")}>5</button>
          </td>
          <td>
            <button onClick={() => handleButton("6")}>6</button>
          </td>
          <td>
            {" "}
            <button onClick={() => handleOperatorButtom("-")}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => handleButton("1")}>1</button>
          </td>
          <td>
            <button onClick={() => handleButton("2")}>2</button>
          </td>
          <td>
            <button onClick={() => handleButton("3")}>3</button>
          </td>
          <td rowSpan="2">
            <button onClick={handleEqualButton}>=</button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {" "}
            <button onClick={() => handleButton("0")}>0</button>
          </td>
          <td onClick={() => handlePointButton(".")}>.</td>
        </tr>
      </tbody>
    </table>
  );
}
