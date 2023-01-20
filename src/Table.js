import React, { Component } from 'react';
import fateChart from './resurcess/dati.json';
import './Table.css';
import { useState } from "react";

//devo passare il nome della probabilita da App.js a Table.js
// vedere se c'e' un modo di passare lo state aggiornato allo stile di un componente



function TableWithJsonData(props) {

  let probabilitaScelta = props.probabilitaScelta;

  const {state, setState} = useState("none");
 
  

  const DisplayData = fateChart.map(
    (info, index) => {
      return(
        <tr>
        
          <th style={{backgroundColor: probabilitaScelta === info.probability ? "green" : state}}>{info.probability}</th>
          {info.value.map((values) => {
            console.log("yesNo: " + values.yesNo)
            return(
              <th style={{backgroundColor: probabilitaScelta === info.probability ? 'green' : state}}>
                <span>
                  {values.exceptionalYes}
                </span>
                <span>
                  {values.yesNo}
                </span>
                <span>
                  {values.exceptionalNo}
                </span>
                
              </th>
            )
          })}
        </tr>
        
      )
    }
  )

 
    console.log(DisplayData);
    return (
      <div class="centered">
        <table>
          <thead>
            <tr>
              <th>Probability</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          {DisplayData}
        </table>
      </div>
    );
  
}



 
export default TableWithJsonData;

