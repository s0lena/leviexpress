import { useState } from 'react'
import './style.css'
import { Seat } from '../Seat';

export const SeatRow = ({row, rowSelectedSeat, onSeatSelected}) => {
   
   
    return (
        <>
        <div className="seat-row">
          
          {row.map((row, index)=>{
            return (<Seat isOccupied={row.isOccupied} number={row.number} key={index} isSelected={row.number === rowSelectedSeat? true:false} onSelect={onSeatSelected}/>  )
          })}
          
        </div>
        </>
    )
    
}


