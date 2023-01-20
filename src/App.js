import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScegliProbabilita from './ScegliProbabilita';
import Table from './Table';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { probabilitaScelta: '' };
        this.selezionaRiga = this.selezionaRiga.bind(this);
    }

    selezionaRiga = (_probabilitaScelta) => {
        this.setState({probabilitaScelta: _probabilitaScelta})

    }

    render() { 
        return (
            <React.StrictMode>
                <h1>{this.state.probabilitaScelta}</h1>
                <ScegliProbabilita selezionaRiga={this.selezionaRiga}/>
                <Table probabilitaScelta={this.state.probabilitaScelta}/>
            </React.StrictMode>
        );
    }
}
 
export default App;