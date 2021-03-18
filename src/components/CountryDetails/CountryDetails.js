import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
     const {countryname}= useParams();
    //  console.log(countryname);
    const [country, setCountry] = useState({});
   
    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${countryname}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
        // .then(data => console.log(data[0]));

    }, [])

    // const {countryLanguage}= useParams();
    //  const [language, setLanguage] = useState({})
       
    // useEffect(()=>{
    //     const url =`https://restcountries.eu/rest/v2/lang/${countryLanguage}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setLanguage(data[0]));
    //     // .then(data => console.log(data[0]));

    // }, [])
    const styleCountry = {
        width:'300px',
        height:'auto',
        border:'1px solid black',
        margin:'10px',
        padding:' 10px 15px 10px 15px',
        borderRadius:"10px",
        textAlign:'center',
        background:'gray' ,
        color:'white',
        fontSize:'18px'
    }

    return (
        <div style={styleCountry}>
              <img style={{width:'200px'}} src={country.flag} alt=''/>
             <h4>This is Country Name: {country.name}</h4>
             <p> Capital: {country.capital}</p>
             <p> Calling Code: {country.callingCodes}</p>
             <p> Time Zone: {country.timezones}</p>
             <p> Population: {country.population}</p>
             {/* <p> Capital: {language.languages}</p>*/}
            
        </div>
    );
};

export default CountryDetails;