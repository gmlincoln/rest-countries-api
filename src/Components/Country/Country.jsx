import { useState } from 'react';
import './Country.css'
import CountryDetails from '../Country Details/CountryDetails';


const Country = ({ country, handleVisitedCountries, handleVisitedCountriesName, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>{name?.common} </h3>
            <img src={flags?.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area} km <sup>2</sup></h4>
            <h4>Code: {cca3}</h4>
            <button onClick={() => {
                handleVisitedCountries(country);
                handleVisitedCountriesName(country?.name?.common);
                handleVisitedFlags(country?.flags?.png);
            }}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            <hr />
            <CountryDetails country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedCountriesName={handleVisitedCountriesName} handleVisitedFlags={handleVisitedFlags} ></CountryDetails>

        </div >
    );
};

export default Country;