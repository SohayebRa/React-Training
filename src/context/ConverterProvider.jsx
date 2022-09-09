import { useState, useReducer, createContext } from "react";

const ConverterContext = createContext([]);

const ConverterProvider = ({ children }) => {
  const [cm, setCm] = useState(0);
  const [pouces, setPouces] = useState(0);

  const initialState = {
    result: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "cmToPouces":
        return {
          result: (state.result = cm / 2.54),
        };
      case "poucesToCm":
        return {
          result: (state.result = pouces * 2.54),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConverterContext.Provider
      value={[state, dispatch, cm, setCm, pouces, setPouces]}
    >
      {children}
    </ConverterContext.Provider>
  );
};

export { ConverterProvider };
export default ConverterContext;
