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
    <section className="pic">
    < div className="App">
      <div> <SearchContainer submissionHandlerCity={submissionHandlerCity} /> </div>
  
      <div class="recommendation">           
        <table class="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Cloud</th>
              <th>Temperature</th>
              <th>Wind direction</th>
              <th>Sun starts</th>
              <th>Sun ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>15:50</td>
              <td>XXXX</td>
              <td>{backend}</td>
              <td>North-South</td>
              <td>8:15</td>
              <td>19:09</td>
            </tr>
          </tbody>
        </table>
  </div>

  <div class="footer">
        <footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        <p class="w3-medium">  <a href="#Contacts">Contacts</a>
          All rights reserved <a href="#">The SCRUM Blue group</a>
        </p>
        </footer>
    </div>

    </div>
    </section>
    
  );
}

export default App;
    