import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalcolaRisposta from './CalcolaRisposta';

const checkbox = document.getElementById('numeriPariTest');


class Dado extends Component {

    ref = React.useRef;
    

    state = {
        risultatoLancioDado: 0,
        eventoInaspettato: false
      } 

    randomNumber = () => {

        const risultato = Math.floor(Math.random() * 100);
        this.setState({risultatoLancioDado: risultato});
        this.props.calcolaRisposta(risultato);

        if (risultato % 11 === 0) {
            alert("Evento inaspettato!!")
        }
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