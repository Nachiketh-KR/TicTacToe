import{ useState } from 'react';

function Square({value,onSquareClick}){
  return (
  <button className="square" onClick={onSquareClick} >{value}</button>
  );
}

export default function Board(){
  const [xIsNxt,setxIsNxt]=useState(true);
  const [sq,setSquare]=useState(Array(9).fill(null));
  function handleClick(i){
    if(sq[i] || calWin(sq)){
      return;
    }
    const nextSquare = sq.slice();
    if(xIsNxt){
      nextSquare[i]="X"
    }
    else{
      nextSquare[i]="O";
    }
    setSquare(nextSquare);
    setxIsNxt(!xIsNxt);
  }
    const winner=calWin(sq);
    let status;
    if(winner){
      status ="Winner :"+winner;
    }
    else{
      status="Next Player :" + (xIsNxt?"X":"O");
    }
  
  
  return(
    <>
    <h1>Tic Tac Toe</h1>
    <div className="status" >{status}</div>
    <div className="board-row">
    <Square value={sq[0]} onSquareClick={() => handleClick(0)}/>
    <Square value={sq[1]} onSquareClick={() => handleClick(1)}/>
    <Square value={sq[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={sq[3]} onSquareClick={() =>handleClick(3)}/>
    <Square value={sq[4]} onSquareClick={() =>handleClick(4)}/>
    <Square value={sq[5]} onSquareClick={() =>handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={sq[6]} onSquareClick={() =>handleClick(6)}/>
    <Square value={sq[7]} onSquareClick={() =>handleClick(7)}/>
    <Square value={sq[8]} onSquareClick={() =>handleClick(8)}/>
    </div>
    
    </>
  );
  }
  function calWin(sq){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    for(let i=0; i<lines.length; i++){
      const[a,b,c]=lines[i];
      if(sq[a]&&sq[a]===sq[b]&&sq[b]===sq[c]){
        return sq[a];
      }
    }
      return null;
}