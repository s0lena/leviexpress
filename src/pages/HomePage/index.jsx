import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { SelectedSeat } from '../../components/SelectedSeat';
import { SeatSelection } from '../../components/SeatSelection';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const HomePage = () => {

  const [journey, setJourney] = useState(null);
  const navigate=useNavigate();

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData)
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
              seat: journey.autoSeat,
              journeyId: journey.journeyId,
            }),
          }
        );
        const data = await resp.json();
        console.log(data.results.reservationId);
        console.log('Working!')
        navigate(`/reservation/${data.results.reservationId}`);
      };
    
    
  
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <><JourneyDetail journey={journey}/></>} 
      {journey &&<SelectedSeat number={journey.autoSeat}/>}
      {/*{journey &&<SeatSelection/>}*/}
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>
    </main>
  );
};

