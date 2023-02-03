import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class VerificaEventoInaspettato extends Component {
    
    state = {
        risultatoDado: this.props.risultatoDado,
        caosSelezionato: this.props.caosSelezionato
    }

    varificaValori = (_risultatoDado, _caosSelezionato) => {
        if (_risultatoDado % 11 === 0 && _risultatoDado / 11 < _caosSelezionato) {
            alert("Evento inaspettato!")
        } else {
            return
        }
    }



    render() { 
        return (
            null
        );
    }
}
 
export default VerificaEventoInaspettato;