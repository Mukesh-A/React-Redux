import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button name="Dec" onClick={() => dispatch(decNum())}>
          -
        </button>
        <p>{myState}</p>
        <button name="Inc" onClick={() => dispatch(incNum())}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
