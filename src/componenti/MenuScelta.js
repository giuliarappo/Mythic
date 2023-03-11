import React, { Component } from 'react';
import fateChart from '../resurcess/dati.json';


const DisplayData = fateChart.map(
    (probability) => {

        return(
            
            <option>{probability.probability}</option>
            
        )
    }
)

class MenuScelta extends Component {
    


    render() { 
        return (
            <select onChange={this.props.probabilitaScelta}>
                <option></option>
                {DisplayData}
            </select>
        );
    }
}
 
export default MenuScelta;