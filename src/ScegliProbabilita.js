import React, { Component } from 'react';
import fateChart from './resurcess/dati.json';
import CalcolaRisposta from './CalcolaRisposta';
import MenuScelta from './MenuScelta';

const DisplayData = fateChart.map(
    (probability) => {
        console.log(probability)

        return(
            
            <option>{probability.probability}</option>
            
        )
    }
)


class ScegliProbabilita extends Component {
    constructor(props) {
        super(props);
        this.state = { selecteOption: '' };
        this.probabilitaScelta = this.probabilitaScelta.bind(this);
    }


    probabilitaScelta = (probabilita) => {
        this.setState({ selecteOption: probabilita });
    }
    
    passaProbabilitaScelta = () => {
        this.props.selezionaRiga(this.state.selecteOption)
    }

    render() { 
        return (
            <div>
                <MenuScelta probabilitaScelta={this.probabilitaScelta}/>
                <button onClick={this.passaProbabilitaScelta} style={{display: this.state.selecteOption === '' ? "none" : "block"}}>Calcola</button>
            </div>
        );
    }
}
 
export default ScegliProbabilita;