import React, {useState, useRef} from "react"
function TicTacToe(){
    const [turn, setTurn]= useState("X")
    const [winner, setWinner] = useState(null)
    const [board, setBoard]= useState(Array(9).fill(null))

    const handleClickWrapper = (event, index) => {
        let newboard=  board.slice()
        if(event.target.textContent!== "" || winner !== null) return;
        turn=== "X" ? event.target.textContent="X" : event.target.textContent="O"
        turn==="X"? setTurn("O") : setTurn("X")
        turn === "X"? newboard[index]= "X" : newboard[index] = "O"
        setBoard(newboard)
        let winner2 = calculateWinner(newboard)
        if (winner2){
          console.log(winner2)
          setWinner(winner2)
        }
      };
      const calculateWinner = (argboard) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for(let line of lines){
          const[a, b, c]= line;
          if(argboard[a] && argboard[a]=== argboard[b] && argboard[a]=== argboard[c]){
            return argboard[a]
          }
        }
        return null  
      };
    
    return(
        <>
            <div className="container">
                <h1>Tic Tac Toe</h1>
                <p className="turn">Turn: {turn}</p>
                <p className="winner">{winner!==null ? `Winner: ${winner}` : ""}</p>
                <div style={{display: winner===null ? 'grid' : 'none'}} className="grid">
                    {board.map((_, index)=>(
                        <div key={index} className="box" onClick={(event)=>handleClickWrapper(event,index)}>{``}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TicTacToe