import React from 'react'

const Square =({value,onclick,isWinning}) => {
    return (
        
    <button type="button" className={`square ${isWinning?"winning":""} ${value==="X"?"text-green":"text-orange"}`} onClick={onclick} 
    >{value}</button>
        
    )
}

export default Square
