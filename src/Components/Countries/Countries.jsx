import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountryName, setVisitedCountryName] = useState([]);
    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountriesName = country => {
        const newCountries = [...visitedCountryName, country];
        setVisitedCountryName(newCountries);
    }

    const handleVisitedFlags = flag => {
        const newFlags = [...visitedCountriesFlag, flag];
        setVisitedCountriesFlag(newFlags);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Display Visited Countries Number */}
            <div>
                <h4>Visited Countries: {visitedCountries.length} </h4>
            </div>
            {/* Visited Country Name */}
            <div>
                <h4>Country Name: {visitedCountryName.map(country => {
                    return `${country}, `
                })} </h4>

            </div>
            {/* Display Flags */}
            <div className="flag-container">
                {visitedCountriesFlag.map((flag, idx) => {
                    return <img key={idx} src={flag} alt=""></img>
                })
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country?.cca3}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedCountriesName={handleVisitedCountriesName}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;