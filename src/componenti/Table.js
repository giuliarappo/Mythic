import React, { Component } from 'react';
import { useState } from "react";
import '../Table.css'
import THead from './THead';

function Table(props) {
 

  const {state, setState} = useState("non-selezionato");
  const probabilitaScelta = props.probabilitaScelta;
  const caosSelezionato = props.caosSelezionato;
  const fateChart = props.fateChart;
  
    return (
        <table className='centrato'>
          <THead/>
          <tbody>
            {props.children}
          </tbody>
        </table>
    );
  
}


export default Table;

