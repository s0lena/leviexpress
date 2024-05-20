import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { SelectedSeat } from '../../components/SelectedSeat'
import { useState } from 'react';



export const HomePage = () => {

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <><JourneyDetail journey={journey}/></>} 
      {journey &&<SelectedSeat number={journey.autoSeat}/>}
    </main>
  );
};

