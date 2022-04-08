
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import SearchBar from "./SearchBar";
import WeatherBox from "./WeatherBox";

//import SearchList from "./SearchList";

const SearchContainer = ({submissionHandlerCity}) => {

        return (
            <div>
                <SearchBar submissionHandlerCity={submissionHandlerCity}/>
                
            </div>
        );
      
    
}

export default SearchContainer;