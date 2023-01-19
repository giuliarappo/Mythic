import React, { Component } from 'react';
import fateChart from './resurcess/dati.json';
import './Table.css';



//Selezionare la riga corrispondente a quella selezionata(passando una props? o lo state)


function TableWithJsonData() {
  console.log("prova");
  const DisplayData = fateChart.map(
    (info, index) => {
      return(
        <tr>
          <th>{info.probability}</th>
          {info.value.map((values) => {
            console.log("yesNo: " + values.yesNo)
            return(
              <th>
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

