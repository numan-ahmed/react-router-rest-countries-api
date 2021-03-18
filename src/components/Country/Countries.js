import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name,flag} = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        const url = `/country/${name}`;
        history.push(url);

    }
  
 const containerStyle ={
    display:'flex',
    float:'left',
    marginLeft:'10px'
 }
const styleCountry = {
    width:'300px',
    height:'300px',
    border:'1px solid black',
    margin:'10px',
    padding:'20px',
    borderRadius:"10px",
    textAlign:'center',
    background:'gray' 
}
const imgStyle = {
    width:'200px',
    borderRadius:'10px',
}
    return (
        <div style={containerStyle}>
        <div style={styleCountry}>
            <img style={imgStyle} src={flag} alt=''/>
       <h2>Name: {name}</h2>
       <h5>idNumber: <Link to={`/country/${name}`}> <button> Show detail of </button> </Link> </h5>
       <button onClick={() => handleClick(name)} style={{padding:'8px 20px',borderRadius:'5px',cursor:"pointer"}}> Click Me</button>
        </div>
        </div>
    );
};

export default Countries;