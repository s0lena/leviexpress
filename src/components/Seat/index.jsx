import './style.css'

export const Seat = ({number}) => {
    return (
        <>
        <svg class="seat" viewBox="0 0 100 100" role="button">
            <rect class="seat__rect" width="80" height="80" x="14" y="10" rx="15" ry="15"></rect>
            <path class="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"></path>
            <text class="seat__text" x="55" y="65">{number}</text>
          </svg>
        </>
    )
    
}