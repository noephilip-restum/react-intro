import React, { useState } from "react";
import calculatorImg from "../../calculator.png";

function Calculator() {
  const [header, setHeader] = useState("Calculator");
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState("");
  const [temp, setTemp] = useState(0);
  const [reset, setReset] = useState(false);

  const normalizeDisplay = function(num) {
    if (display === "0") {
      setDisplay(num);
    } else if (display.length < 13) {
      setDisplay(display + num);
    }
  };

  const selectOperator = function(selected) {
    if (!operator) {
      setTemp(parseInt(display));
      setDisplay("0");
      setOperator(selected);
    }
  };

  const calculate = function() {
    if (!operator) {
      return;
    }

    let result;

    switch (operator) {
      case "+":
        result = temp + parseInt(display, 10);
        break;
      case "-":
        result = temp - parseInt(display, 10);
        break;
      case "*":
        result = temp * parseInt(display, 10);
        break;
      case "/":
        result = temp / parseInt(display, 10);
        break;
      default:
        break;
    }
    setDisplay(result.toString());
  };

  const cleardisplay = function() {
    setDisplay("0");
    setOperator("");
    setTemp(0);
    setReset(false);
  };
  return (
    <div id="calculator-container">
      <input
        id="header-input"
        onChange={event => setHeader(event.target.value)}
      />
      <h1 id="header"> {header} </h1>
      <img className="remove-highlight" src={calculatorImg} alt="calculator" />
      <div id="calculator-mask" className="remove-highlight">
        <div className="output">
          <span className="total">{display}</span>
        </div>

        <div className="btn clear" onClick={cleardisplay}></div>

        <div className="btn zero" onClick={() => normalizeDisplay("0")}></div>
        <div className="btn one" onClick={() => normalizeDisplay("1")}></div>
        <div className="btn two" onClick={() => normalizeDisplay("2")}></div>
        <div className="btn three" onClick={() => normalizeDisplay("3")}></div>
        <div className="btn four" onClick={() => normalizeDisplay("4")}></div>
        <div className="btn five" onClick={() => normalizeDisplay("5")}></div>
        <div className="btn six" onClick={() => normalizeDisplay("6")}></div>
        <div className="btn seven" onClick={() => normalizeDisplay("7")}></div>
        <div className="btn eight" onClick={() => normalizeDisplay("8")}></div>
        <div className="btn nine" onClick={() => normalizeDisplay("9")}></div>

        <div className="btn equal" onClick={calculate}></div>
        <div className="btn multiply" onClick={() => selectOperator("*")}></div>
        <div className="btn divide" onClick={() => selectOperator("/")}></div>
        <div className="btn subtract" onClick={() => selectOperator("-")}></div>
        <div className="btn add" onClick={() => selectOperator("+")}></div>
      </div>
    </div>
  );
}

export default Calculator;
