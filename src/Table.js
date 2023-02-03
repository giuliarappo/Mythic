import React, { Component } from 'react';
import './Table.css';
import { useState } from "react";


// aggiungere caos e selezionare la cella corrispettiva
// dado (o 2 dadi)
// calcolo risposta con visualizzazione risultato (if? conditional rendering?)

//BACKEND
//CRUD
//java databasse 0 spring 
//creazione classe utente da console (operazioni crud)




function Table(props) {

  let probabilitaScelta = props.probabilitaScelta;
  let caosSelezionato = props.caosSelezionato;
  const fateChart = props.fateChart
 

  const {state, setState} = useState("non-selezionato");
 // const cambiaColore = setState..
 
  
 
  const DisplayData = fateChart.map(
    (info, index) => {
      return(
        <tr>
        
          <th id={"tb_" + info.probability} style={{backgroundColor: probabilitaScelta === info.probability ? "green" : state}}>{info.probability}</th>
          {info.value.map((values, index) => {
            console.log("yesNo: " + values.yesNo)
            index = index+1;
            return(
              <th id={"th_" + info.probability + index} className={"prova " + (probabilitaScelta === info.probability && caosSelezionato === index ? "selezionato" : "no-selezionato")}>
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

            const valoriCasellaSelezionata = info.probability
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
        <p>Hai selezionato {caosSelezionato}</p>
      </div>
    );
  
}



 
export default Table;

