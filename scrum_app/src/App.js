import logo from './logo.svg';
import './assets/App.css';
import React, { useState, useEffect } from "react";

import SearchContainer from './components/SearchContainer';
import WeatherBox from './components/WeatherBox';
import "./assets/searchbar.css";


function App() {

  const [backend,setBackend]=useState("")

  let submissionHandlerCity = (e) =>{
    if (e.key === 'Enter') {

      fetch('http://localhost:9000/testBack/po/?city=' + e.target.value)
        .then(res => res.json())
        .then(backend => setBackend(backend.main.temp));
      console.log(backend);
    }
  
  }
  
  useEffect(() => {
    fetch('http://localhost:9000/testBack/po')
              .then(res => res.json())
              .then(backend => setBackend(backend.main.temp));
  }, []);
 
  /*useEffect(() => {
    fetch('http://localhost:9000/testBack').then(res => res.text()).then(backend => setBackend(backend));
  }, []);*/

  return (
    <div className="App">
      <div> <SearchContainer submissionHandlerCity={submissionHandlerCity} /> </div>
      <div>{backend}</div>

      <div class="recommendation">           
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Cloud</th>
              <th>Degrees</th>
              <th>Wind direction</th>
              <th>Sun starts</th>
              <th>Sun ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>{backend}</td>
              <td>{backend}</td>
              <td>31</td>
              <td>North-South</td>
              <td>8:15</td>
              <td>19:09</td>
            </tr>
          </tbody>
        </table>
  </div>
    </div>
  );
}

export default App;
    