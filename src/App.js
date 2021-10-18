import React from "react";
import Board from "./components/Board";
import "./style/root.scss"

function app(){
  return(
    <div className="app">
      <h1>TIK TAK TOE</h1>
      <Board/>
    </div>
  )
};
export default app;
