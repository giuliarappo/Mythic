import React, { Component, useRef } from 'react';

//Importa componenti
import fateChart from './resurcess/dati.json';
import MenuScelta from './componenti/MenuScelta';
import Caos from './componenti/Caos';
import Table from './componenti/Table';
import Dado from './componenti/Dado';
import MostraRisposta from './componenti/MostraRisposta';
import VerificaEventoInaspettato from './componenti/VerificaEventoInaspettato';
import InputDomanda from './componenti/InputDomanda';

const refVerificaValori = React.createRef();
const refVerificaRisposta = React.createRef();
let yesNo;
let exceptionalYes;
let exceptionalNo;

// TROVARE UN MODO PER TESTARE GLI EVENTI SENZA MODIFICARE IL CODICE (TIPO CON UN FILE DI CONFIGURAZIONE ESTERNO)
// configurazione spring boot
// POSSIBILITA' DI INSERIRE LE DOMANDE E COMPONENTE LISTA CON DOMANDE E RISPOSTE


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedOption: '',
            cellaSelezionata: '',
            caosSelezionato: 1,
            lancioDado: 0,
            exceptionalYes: 0,
            domanda: ''
        };

        this.probabilitaScelta = this.probabilitaScelta.bind(this);
    }

    
    

    prendeCella = () => {
        fateChart.map(
            (info) => {
                if (info.probability === this.state.selectedOption) {
                    info.value.map(
                        (info, index) => {
                            if (index === this.state.caosSelezionato - 1) {
                                yesNo = info.yesNo;
                                exceptionalYes = info.exceptionalYes;
                                exceptionalNo = info.exceptionalNo;
                            }
                        }
                    )
                }
            }
        )
    }
  

    probabilitaScelta = (probabilita) => {
        this.setState({ 
            selectedOption: probabilita
        });
    }
    

    valoreCaos = (caos) => {
        this.setState({ caosSelezionato: caos })
    }

    calcolaRisposta = (_lancioDado) => {
        this.prendeCella();
        console.log(exceptionalYes);
        refVerificaValori.current.varificaValori(_lancioDado, this.state.caosSelezionato)
        refVerificaRisposta.current.verificaRisposta(_lancioDado, yesNo, exceptionalYes, exceptionalNo);
        
    }

    



    render() { 
        return (
            <div>
                <Table probabilitaScelta={this.state.selectedOption} caosSelezionato={this.state.caosSelezionato} fateChart={fateChart}/>
                <InputDomanda input={this.state.domanda}/>
                <MenuScelta probabilitaScelta={this.probabilitaScelta}/>
                <Caos valoreCaos={this.valoreCaos}/>
                <button onClick={this.passaProbabilitaScelta} style={{display: this.state.selectedOption === '' ? "none" : "block"}}>Calcola</button>
                <Dado probabilitaScelta={this.state.selectedOption} calcolaRisposta={this.calcolaRisposta}/>
                <MostraRisposta risultatoDado={this.state.lancioDado} ref={refVerificaRisposta}/>  
                <VerificaEventoInaspettato risultatoDado={this.state.lancioDado} caosSelezionato={this.state.caosSelezionato} ref={refVerificaValori}/>            

            </div>
        );
    }
}
 
export default App;