import React from "react";
import { Seat } from "../Seat";
import "./style.css"
import { SeatRow } from "../SeatRow";

export const SeatPicker = ({seats, selectedSeat, onSeatSelected}) => {
  
    return (
    <>
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
      {seats.map((seats, index)=> <SeatRow key={index} row={seats} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>)}
      </div>
    </div>
    
  </>
    )
}