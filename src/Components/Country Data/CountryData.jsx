const CountryData = (props) => {
    const { country } = props;
    const countryOfficialStyel = {
        background: 'yellow'
    }
    return (
        <div>
            <h4>Official Name: <span style={countryOfficialStyel}>{country?.name?.official}</span></h4>
        </div>
    );
};

export default CountryData;