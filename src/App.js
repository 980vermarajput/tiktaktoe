import React,{useState} from "react";
import Board from "./components/Board";
import "./style/root.scss"
import { calculateWinner } from "./components/helper"
import History from "./components/History";
import StatusFile from "./components/StatusFile";

function app(){
  const [history,sethistory]=useState([{board:Array(9).fill(null),isNext:true}]);
  const[currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove];
  // const [isNext,setIsNext]= useState(false);
  const winner=calculateWinner(current.board);
  


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
  return(
    <div className="app">
      <h1>TIK TAC TOE</h1>
      <StatusFile winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  )
};
export default app;
