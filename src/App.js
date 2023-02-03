import React, { Component, useRef } from 'react';
import fateChart from './resurcess/dati.json';
import CalcolaRisposta from './CalcolaRisposta';
import MenuScelta from './MenuScelta';
import Caos from './Caos';
import Table from './Table';
import Dado from './Dado';
import MostraRisposta from './MostraRisposta';
import VerificaEventoInaspettato from './VerificaEventoInaspettato';

const ref = React.createRef();
let yesNo;
let exceptionalYes;
let exceptionalNo;

// GLI EVENTI INASPETTATI CI SONO SOLAMENTE SE IL NUMERO E' INFERIORE AL CAOS
// EVENTI INASPETTATI
// TROVARE UN MODO PER TESTARE GLI EVENTI SENZA MODIFICARE IL CODICE (TIPO CON UN FILE DI CONFIGURAZIONE ESTERNO)
// configurazione spring boot




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedOption: '',
            cellaSelezionata: '',
            caosSelezionato: 1,
            lancioDado: 0,
            exceptionalYes: 0 
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
        ref.current.varificaValori(_lancioDado, this.state.caosSelezionato)
        ref.current.verificaRisposta(_lancioDado, yesNo, exceptionalYes, exceptionalNo);
        
    }

    



    render() { 
        return (
            <div>
                <Table probabilitaScelta={this.state.selectedOption} caosSelezionato={this.state.caosSelezionato} fateChart={fateChart}/>
                <MenuScelta probabilitaScelta={this.probabilitaScelta}/>
                <Caos valoreCaos={this.valoreCaos}/>
                <button onClick={this.passaProbabilitaScelta} style={{display: this.state.selectedOption === '' ? "none" : "block"}}>Calcola</button>
                <Dado probabilitaScelta={this.state.selectedOption} calcolaRisposta={this.calcolaRisposta}/>
                <MostraRisposta risultatoDado={this.state.lancioDado} ref={ref}/>  
                <VerificaEventoInaspettato risultatoDado={this.state.lancioDado} caosSelezionato={this.state.caosSelezionato} ref={ref}/>            

            </div>
        );
    }
}
 
export default App;