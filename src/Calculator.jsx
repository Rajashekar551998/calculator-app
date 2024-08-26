import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <React.Fragment>
      <div className="calculator">
        <h5 className="text-center">Calculator</h5>
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="btn btn-primary" onClick={() => handleClick("+")}>
            +
          </button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="btn btn-primary" onClick={() => handleClick("-")}>
            -
          </button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="btn btn-primary" onClick={() => handleClick("*")}>
            *
          </button>
          <button onClick={() => handleClick("0")}>0</button>
          <button className="btn btn-danger" onClick={handleClear}>
            C
          </button>
          <button className="btn btn-primary" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn btn-primary" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="btn btn-success" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
