import { useState } from 'react'
import './style.css'

export const Seat = ({number, isOccupied, isSelected, onSelect}) => {
    
    let svgClassName = "seat";
    if (isOccupied) {
        svgClassName += " seat--occupied";
    }
    if (isSelected) {
        svgClassName += " seat--selected";
    }

    const handleClick = () => {
        if (isOccupied === false) {
            onSelect(number);
        }
    }
    

    return (
        <>
        <svg className={svgClassName} viewBox="0 0 100 100" role="button" key={number} onClick={handleClick}>
                <rect className="seat__rect" width="80" height="80" x="14" y="10" rx="15" ry="15"></rect>
                <path className="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"></path>
                <text className="seat__text" x="55" y="65">{number}</text>
          </svg>
        </>
    )
    
}

/*{isOccupied? "seat seat--occupied":"seat"}*/