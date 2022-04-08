
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
//import "./assets/searchbar.css";


const WeatherBox = () => {

        let days = ["monday", "tuesday", "wednesday"] 

        return (
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
    );
      
    
}

export default WeatherBox;