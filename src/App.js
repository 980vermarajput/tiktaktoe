import React,{useState} from "react";
import Board from "./components/Board";
import "./style/root.scss"
import { calculateWinner } from "./components/helper"
import History from "./components/History";
import StatusFile from "./components/StatusFile";

const NEW_GAME=[{board:Array(9).fill(null),isNext:true}];
function app(){
  const [history,sethistory]=useState(NEW_GAME);
  const[currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove]
  const {winner,winningSquares}=calculateWinner(current.board);
  
  const handleSquareClick=(position)=>{
      if(current.board[position]||winner)
          return;
      sethistory(prev=>{
          const last=prev[prev.length-1];
          const newBoard= last.board.map((square,pos) => {
              if(pos===position){
                  return last.isNext?"X" :"O";
              }
              return square;
          });
          return prev.concat({board:newBoard, isNext:!last.isNext});
        })
        setCurrentMove(prev=>prev+1);
  }
  const moveTo=(move)=>{
    setCurrentMove(move);
  }
  const resetGame=()=>{
      sethistory(NEW_GAME);
      setCurrentMove(0);
  }
  return(
    <div className="app">
      <h1>TIK TAC TOE</h1>
      <StatusFile winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
      <button type="button" onClick={resetGame}>Start New Game</button>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  )
};
export default app;
