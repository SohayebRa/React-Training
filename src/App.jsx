import { Fragment } from "react";
import { PostProvider } from "./context/PostProvider";
import { ConverterProvider } from "./context/ConverterProvider";
import Posts from "./components/Posts/Posts";
import Movies from "./components/Movies/Movies";
import Converter from "./components/Converter/Converter";
import "./App.css";
import Calc from "./components/Calc/Calc";
import { CalcProvider } from "./context/CalcProvider";

function App() {
  return (
    <Fragment>
      <PostProvider>
        <h1>Exercice 01</h1>
        <Posts />
      </PostProvider>
      <hr style={{ margin: "2.5rem 0" }} />
      <h1>Exercice 02</h1>
      <Movies />
      <hr style={{ margin: "2.5rem 0" }} />
      <ConverterProvider>
        <h1>Exercice 03</h1>
        <Converter />
      </ConverterProvider>
      <hr style={{ margin: "2.5rem 0" }} />
      <CalcProvider>
        <h1>Exercice 04</h1>
        <Calc />
      </CalcProvider>
      <hr style={{ margin: "2.5rem 0" }} />
    </Fragment>
  );
}

export default App;
