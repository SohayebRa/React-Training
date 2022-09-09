import { Fragment, useContext } from "react";
import ConverterContext from "../../context/ConverterProvider";
import "./Converter.css";

const Converter = () => {
  const [state, dispatch, cm, setCm, pouces, setPouces] =
    useContext(ConverterContext);
  return (
    <Fragment>
      <div className="inputConverter">
        <input
          type="number"
          placeholder="cm"
          value={cm}
          onChange={(e) => setCm(e.target.value)}
        />
        <input
          type="number"
          placeholder="pouces"
          value={pouces}
          onChange={(e) => setPouces(e.target.value)}
        />
      </div>
      <div className="buttonsConverter">
        <button onClick={() => dispatch({ type: "cmToPouces" })}>
          Cm à Pouces
        </button>
        <button onClick={() => dispatch({ type: "poucesToCm" })}>
          Pouces à Cm
        </button>
      </div>
      <h2 className="resultConverter">Resultat: {state.result} </h2>
    </Fragment>
  );
};

export default Converter;
