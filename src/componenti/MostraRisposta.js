import React, { Component } from 'react';


class MostraRisposta extends Component {
    constructor(props){
        super(props);
        this.state = {
            rispostaDado: 0,
            mostraRisposta: false,
            messaggio: ''
        }
       
        const risultatoDado = props.risultatoDado; 

    }

    verificaRisposta = (_rispostaDado, yesNo, exceptionalYes, exceptionalNo) => {

        this.setState({mostraRisposta: true});

        if (_rispostaDado < exceptionalYes) {

            this.setState({messaggio: 'Assolutamente Si!'})
            return

        } if (_rispostaDado < yesNo && _rispostaDado >= exceptionalYes) {
            
            this.setState({messaggio: 'Si!'})
            return

        } if (_rispostaDado >= yesNo && _rispostaDado < exceptionalNo) {
            
            this.setState({messaggio: 'No!'})
            return

        } if (_rispostaDado > exceptionalNo) {

            this.setState({messaggio: 'Assolutamente No!'})
            return

        }
    }



    render() { 
        return (
            <div style={{display: this.state.mostraRisposta === true ? "block" : "none"}}>
               <h1>{this.state.messaggio}</h1>
            </div>
        );
    }
}
 
export default MostraRisposta; 