import React, { Component } from 'react';

//importa file di configurazione
import configuration from '../resurcess/configuration.json';

const checkbox = document.getElementById('numeriPariTest');


class Dado extends Component {

    ref = React.useRef;
    

    state = {
        risultatoLancioDado: 0,
        eventoInaspettato: false,
      } 

    randomNumber = () => {

        let risultato;

        risultato = Math.floor(Math.random() * 100) + 1;
        this.setState({risultatoLancioDado: risultato});

        if (configuration.dammiSoloNumeriPolindromi === true) {
            
            risultato = configuration.numero;
        }
        
        this.props.calcolaRisposta(risultato);

       
       
    }


    render() { 
        return (
            <div>
                <button onClick={this.randomNumber} style={{display: this.props.probabilitaScelta === '' ? "none" : "block"}}>Lancia dado</button>
                <h1 style={{display: this.state.eventoInaspettato == false ? "none" : "block"}}>Evento inaspettato!!</h1>
            </div>
        );
    }
}
 
export default Dado;