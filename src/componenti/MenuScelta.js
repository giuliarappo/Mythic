import React, { Component } from 'react';
import fateChart from '../resurcess/dati.json';


const DisplayData = fateChart.map(
    (probability) => {
        console.log(probability)

        return(
            
            <option>{probability.probability}</option>
            
        )
    }
)

class MenuScelta extends Component {
    

    handleChange = (event) => {
        this.props.probabilitaScelta(event.target.value);
        event.preventDefault();
    }

    render() { 
        return (
            <select onChange={this.handleChange}>
                <option></option>
                {DisplayData}
            </select>
        );
    }
}
 
export default MenuScelta;