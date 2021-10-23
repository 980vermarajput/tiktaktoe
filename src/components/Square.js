import React from 'react'

const Square =({value,onclick,isWinning}) => {
    return (
        
    <button type="button" className="square" onClick={onclick} 
    style={{fontWeight:isWinning?"bold":"normal"}}>{value}</button>
        
    )
}

export default Square
