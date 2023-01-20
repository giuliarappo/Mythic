import React, { Component } from 'react';
import fateChart from './resurcess/dati.json';
import CalcolaRisposta from './CalcolaRisposta';

const DisplayData = fateChart.map(
    (probability) => {
        console.log(probability)

        return(
            
            <option>{probability.probability}</option>
            
        )
    }
)


class MenuTendina extends Component {
    constructor(props) {
        super(props);
        this.state = { selecteOption: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selecteOption: event.target.value });
    }
    
    render() { 
        return (
            <div>
                <select>
                    <option></option>
                    {DisplayData}
                </select>
                <CalcolaRisposta selecteOption={this.state.selecteOption}/>
            </div>
        );
    }
}
 
export default MenuTendina;