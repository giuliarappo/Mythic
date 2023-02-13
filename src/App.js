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
            caosSelezionato: 1,
            lancioDado: 0,
            exceptionalYes: 0,
            domanda: ''
        };
        this.creaFateChart = this.creaFateChart.bind(this);
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

    creaFateChart = () => fateChart.map(
            (info, index) => {
                console.log(this.state.selectedOption);
            return(
                <tr>
                    <th id={"tb_" + info.probability} style={{backgroundColor: this.state.selectedOption === info.probability ? 'green' : 'white'}}>{info.probability}</th>
                    {info.value.map((values, index) => {
                        index = index+1;
                        return(
                          <th id={"th_" + info.probability + index} style={{backgroundColor: this.state.caosSelezionato === index && this.state.selectedOption === info.probability ? 'green' : 'white'}}>
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
                    }) }
                </tr>
          )
        }
      )
  

    probabilitaScelta = (evento) => {
        this.setState({ 
            selectedOption: evento.target.value
        });
        console.log(this.state.selectedOption)
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
                <InputDomanda input={this.state.domanda}/>
                <MenuScelta probabilitaScelta={this.probabilitaScelta}/>
                <Caos valoreCaos={this.valoreCaos}/>
                <button onClick={this.passaProbabilitaScelta} style={{display: this.state.selectedOption === '' ? "none" : "block"}}>Calcola</button>
                <Dado probabilitaScelta={this.state.selectedOption} calcolaRisposta={this.calcolaRisposta}/>
                <MostraRisposta risultatoDado={this.state.lancioDado} ref={refVerificaRisposta}/>  
                <VerificaEventoInaspettato risultatoDado={this.state.lancioDado} caosSelezionato={this.state.caosSelezionato} ref={refVerificaValori}/>            
                <Table>
                    {this.creaFateChart()}
                </Table>
            </div>
        );
    }
}
 
export default App;