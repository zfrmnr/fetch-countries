
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

const [countries ,setcountries]=useState([]);

  /*useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(response=>setcountries(response));
  },[]);*/

  useEffect(()=>{
    axios.get('https://restcountries.com/v2/all')
    .then(response =>setcountries(response.data));
  
  },[]);

  return (
    <div className="App">
      {countries.map(country => {
      return (
      <div key={country.name}>
        <h2>{country.name}</h2>
        <h4>{country.capital}</h4>
        <p>
          <img
          src={country.flag} 
          alt={country.name}
          style= {{width:"100px"}}
          />
          </p>
          
      </div>
      );
    })}
    </div>
  );
}

export default App;
