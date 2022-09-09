import { useState, Fragment, useContext } from "react";
import CalcContext from "../../context/CalcProvider";
import "./Calc.css";

const Calc = () => {
  const [emptyOp, setEmptyOp] = useState(true);

  const [
    state,
    dispatch,
    operator,
    operand1,
    operand2,
    setOperator,
    setOperand1,
    setOperand2,
  ] = useContext(CalcContext);

  const funcOperands = (e) => {
    if (emptyOp === true) {
      if ((operand1 === "" && e.target.textContent !== 0) || operand1 !== "") {
        const val1 = operand1 + e.target.textContent;
        setOperand1(Number(val1));
      } else if (operand1 !== "") {
        const val1 = operand1 + e.target.textContent;
        setOperand1(Number(val1));
      }
    } else if (emptyOp === false) {
      if (operand2 === "" && e.target.textContent !== 0) {
        const val2 = operand2 + e.target.textContent;
        setOperand2(Number(val2));
      } else if (operand2 !== "") {
        const val2 = operand2 + e.target.textContent;
        setOperand2(Number(val2));
      }
    }
  };

  const handleOperator = (op) => {
    if (state.result !== 0) {
      setOperand1(state.result);
      setEmptyOp(true);
      setOperand2("");
      state.result = 0;
    }
    setOperator(op);
    setEmptyOp(false);
  };

  const handleOperand = (e) => {
    if (state.result !== 0) {
      state.result = 0;
    }
    funcOperands(e);
  };

  const operation = () => {
    if (state.result !== 0) {
      return state.result;
    } else if (operand1 !== "" && operator === "") {
      return operand1;
    } else if (operand1 !== "" && operator !== "" && operand2 === "") {
      return operand1 + " " + operator;
    } else if (operand1 !== "" && operator !== "" && operand2 !== "") {
      return operand1 + " " + operator + " " + operand2;
    } else {
      return 0;
    }
  };

  return (
    <Fragment>
      <div className="calculator">
        <div className="screen">{operation()}</div>
        <div className="keyboard">
          <div className="grid">
            <button onClick={handleOperand}>1</button>
            <button onClick={handleOperand}>2</button>
            <button onClick={handleOperand}>3</button>
            <button onClick={handleOperand}>4</button>
            <button onClick={handleOperand}>5</button>
            <button onClick={handleOperand}>6</button>
            <button onClick={handleOperand}>7</button>
            <button onClick={handleOperand}>8</button>
            <button onClick={handleOperand}>9</button>
            <button
              onClick={() => {
                handleOperator("+");
              }}
            >
              +
            </button>
            <button onClick={handleOperand}>0</button>
            <button
              onClick={() => {
                handleOperator("-");
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                handleOperator("x");
              }}
            >
              x
            </button>
            <button
              onClick={() => {
                dispatch({ type: "RESET" });
                setOperand1("");
                setOperand2("");
                setOperator("");
                setEmptyOp(true);
              }}
            >
              C
            </button>
            <button
              onClick={() => {
                handleOperator("/");
              }}
            >
              /
            </button>
          </div>
          <button
            className="resultButton"
            onClick={() => {
              dispatch({ type: "EQUAL" });
            }}
          >
            =
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Calc;
