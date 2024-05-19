import React, { useEffect, useState } from 'react';
import './style.css';
import { BusStop } from '../BusStop';


export const JourneyDetail = ({journey}) => {
    return (
    <div className="journey-detail container" key={journey.code}>
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((journey)=><BusStop name={journey.name} station={journey.station} time={journey.time} key={journey.code}/>)}
      </div>
    </div>)
    }