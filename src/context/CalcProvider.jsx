import { useState, useEffect, useReducer, createContext } from "react";

const CalcContext = createContext([]);

const CalcProvider = ({ children }) => {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");

  useEffect(() => {
    dispatch({ operator, operand1, operand2 });
  }, [operand1, operand2, operator]);

  const initialState = {
    result: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "EQUAL":
        return {
          result:
            operator === "+"
              ? operand1 + operand2
              : operator === "-"
              ? operand1 - operand2
              : operator === "x"
              ? operand1 * operand2
              : operator === "/"
              ? operand1 / operand2
              : initialState,
        };
      case "RESET":
        return {
          result: 0,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalcContext.Provider
      value={[
        state,
        dispatch,
        operator,
        operand1,
        operand2,
        setOperator,
        setOperand1,
        setOperand2,
      ]}
    >
      {children}
    </CalcContext.Provider>
  );
};

export { CalcProvider };
export default CalcContext;
