import React from "react";
import { Seat } from "../Seat";
import "./style.css"

export const SeatPicker = () => {
    return (
    <>
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
      <Seat number={22}/>
      <Seat number={1}/>
      <Seat number={12}/>
      </div>
    </div>
    
  </>
    )
}