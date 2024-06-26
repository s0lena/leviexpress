import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
/*import { SelectedSeat } from '../../components/SelectedSeat';*/
import { SeatPicker } from '../../components/SeatPicker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const HomePage = () => {

  const [journey, setJourney] = useState(null);
  const navigate=useNavigate();
  const [userSeat, setUserseat] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
    setUserseat(journeyData.autoSeat);
  }

  const handleBuy = async() => {
       const resp = await fetch(
          "https://apps.kodim.cz/daweb/leviexpress/api/reservation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: "create",
              seat: userSeat,
              journeyId: journey.journeyId,
            }),
          }
        );
        const data = await resp.json();
        navigate(`/reservation/${data.results.reservationId}`);
      };
    
  
  
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <><JourneyDetail journey={journey}/></>} 
      {/*{journey &&<SelectedSeat number={journey.autoSeat}/>}*/}
      {journey&& <SeatPicker seats={journey.seats} selectedSeat={userSeat} onSeatSelected={setUserseat}/> }
      
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>
    </main>
  );
};

