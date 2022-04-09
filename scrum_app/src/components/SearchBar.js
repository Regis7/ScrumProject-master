import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';




const SearchBar = ({submissionHandlerCity}) => {

        const [inputText, setInputText] = useState("");
        let inputHandler = (e) => {
          //convert input text to lower case
          var lowerCase = e.target.value.toLowerCase();
          setInputText(lowerCase);
        };

       
        //'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=P&types=geocode&key=AIzaSyAV5_m8TaCdFNHMesdnNMp8C5ixrymRGx4',

        
        /*useEffect(() => {
          fetch('')
                    .then(res => res.json())
                    .then(backend => setBackend(backend.main.temp));
        }, []);*/
      
        return (
          <>
          <div class="navigation">
        
            <nav class="menu1">
                <a href="#Home" class="logo">Home</a>
                <a href="#Weather-info" class="menu">Weather info</a>
                <a href="#Contacts" class="menu">Contacts</a>
                <a href="#Login" class="menu">Login</a>
            </nav>
        </div>
          <div className="main">
            <h1>Weather application</h1>
            <div className="search">
            
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search by country of city name"
                value={inputText}
                onKeyDown={submissionHandlerCity}
              />
             
            
            </div>
           
          </div>
          </>
        );
      
    
}

export default SearchBar;