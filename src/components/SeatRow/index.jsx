import './style.css'

export const SeatRow = ({row}) => {
  
    return (
        <>
        <div className="seat-row">
          {row.map((row)=>{
            return (
                <svg className={row.isOccupied? "seat seat--selected":"seat" } viewBox="0 0 100 100" role="button" key={row.number}>
                <rect className="seat__rect" width="80" height="80" x="14" y="10" rx="15" ry="15"></rect>
                <path className="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"></path>
                <text className="seat__text" x="55" y="65">{row.number}</text>
          </svg>
            )
          })}
          
        </div>
        </>
    )
    
}