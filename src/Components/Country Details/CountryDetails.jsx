import CountryData from "../Country Data/CountryData";

const CountryDetails = (props) => {
    // const { country, handleVisitedCountries, handleVisitedCountriesName, handleVisitedFlags } = props;
    return (
        <div>
            <h4>Country Details</h4>
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;