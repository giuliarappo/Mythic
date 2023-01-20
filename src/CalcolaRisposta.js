import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";


const CalcolaRisposta = (props) => {
    const [state, setState] = useState("none");

    return(
        <div>
            <h3>{props.selecteOption}</h3>
        </div>
    )
}
 
export default CalcolaRisposta;