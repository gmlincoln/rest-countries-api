const CountryData = (props) => {
    const { country } = props;
    const countryOfficialStyle = {
        background: 'yellow'
    }
    return (
        <div>
            <h4>Official Name: <span style={countryOfficialStyle}>{country?.name?.official}</span></h4>
        </div>
    );
};

export default CountryData;