import './Country.css'
const Country = ({ country }) => {
    const { name, flags, population, area } = country;
    return (
        <div className='country'>
            <h3>{name?.common} </h3>
            <img src={flags?.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area} km <sup>2</sup></h4>
        </div>
    );
};

export default Country;