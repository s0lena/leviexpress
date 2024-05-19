import React, { useEffect, useState } from 'react';
import './style.css';

export const CityOptions = ({ cities }) => {
  return (
    <>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

export const DatesOptions = ({ dates }) => {
  return (
  <>
    {dates.map((date)=><option value={date.dateBasic} key={date.dateBasic}>{date.dateCs}</option>)}
    
  </>
  )
}

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchJourneys = async () => {
      const resp = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      const data = await resp.json();
      console.log(data);
      console.log(data.results)
      onJourneyChange(data.results);
      
  };
    fetchJourneys()
    
  };

  useEffect(() => {
    const fetchCities = async () => {
      const resp = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await resp.json();
      setCities(data.results);
      console.log(data);
    };
    const fetchDates = async () => {
      const resp = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
      const data = await resp.json();
      setDates(data.results);
      console.log(data.results);
    };
    fetchCities();
    fetchDates();
  }, []);



  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={(event) => setFromCity(event.target.value)}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={(event) => setToCity(event.target.value)}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={(event) => setDate(event.target.value)}>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit" disabled={fromCity&&toCity&&date ? false:true}>
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
