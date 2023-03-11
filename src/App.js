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
let fateChartJsx;

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
            domande: [],
            mostraFateChart: false
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
            info => {
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
        const state = {
            ...this.state
        }
        
        state.selectedOption = evento.target.value;

        this.setState({ 
            selectedOption: state.selectedOption
        });
        
    }
    

    valoreCaos = (caos) => {
        const state = {
            ...this.state
        }
        state.caosSelezionato = caos;

        this.setState({ caosSelezionato: state.caosSelezionato })
    }

    calcolaRisposta = (_lancioDado) => {
        refVerificaValori.current.verificaValori(_lancioDado, this.state.caosSelezionato)
        refVerificaRisposta.current.verificaRisposta(_lancioDado, yesNo, exceptionalYes, exceptionalNo);
        
    }


    attivaFateChart = () => {
        const fateChartVisibility = this.state.mostraFateChart;
        this.setState({
            mostraFateChart: !fateChartVisibility
        })
    }


    domandaRicevuta = (domanda) => {
        let domande = [...this.state.domande]

        domande = [
            ...domande,
            {
                testo: domanda
            }
        ]

        this.setState({
            domande: domande
        })
    }

    eliminaDomanda = (indexDomanda) => {
        const domande = [...this.state.domande];
        domande.splice(indexDomanda, 1);
        this.setState({
            domande: domande
        });
    }
    



    render() { 

    let fateChart = null;


    // Verifica se deve mostrare il fateChart
    if (this.state.mostraFateChart) {
        fateChart = (
            <Table>
                {this.creaFateChart()}
            </Table>
        )

    }
        return (
            <div>
                <InputDomanda domande={this.state.domande} domandaEffettuata={this.domandaRicevuta} eliminaDomanda={this.eliminaDomanda}/>
                <MenuScelta probabilitaScelta={this.probabilitaScelta}/>
                <Caos valoreCaos={this.valoreCaos}/>
                <button onClick={this.passaProbabilitaScelta} style={{display: this.state.selectedOption === '' ? "none" : "block"}}>Calcola</button>
                <Dado probabilitaScelta={this.state.selectedOption} calcolaRisposta={this.calcolaRisposta}/>
                <MostraRisposta risultatoDado={this.state.lancioDado} ref={refVerificaRisposta} probabilitaScelta={this.state.selectedOption} caosSelezionato={this.state.caosSelezionato}/>  
                <VerificaEventoInaspettato risultatoDado={this.state.lancioDado} caosSelezionato={this.state.caosSelezionato} ref={refVerificaValori}/>            
                {fateChart}
                <button onClick={this.attivaFateChart}>FateChart</button>
            </div>
        );
    }
}
 
export default App;