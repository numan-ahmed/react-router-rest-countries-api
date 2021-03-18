import React, { useEffect, useState } from 'react';
import Countries from '../Country/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);

useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
    // .then(data => console.log(data));

},[])

    return (
        <div>
            <h1 style={{ textAlign:'center'}}> World country's: {countries.length}</h1>
            {
                countries.map(country => <Countries country={country}></Countries>)
            }
           
        </div>
    );
};


export default Home;