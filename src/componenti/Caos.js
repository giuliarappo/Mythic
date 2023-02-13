import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Caos extends Component {
    state = {
        caosDefault: 1
      } 

      cambiaValoreCaos = (event) => {
        if (isNaN(event.target.value)) {
            return;
        } 
        
        const caosScelto = parseInt(event.target.value);
        event.preventDefault();
        this.props.valoreCaos(caosScelto);
      }

    render() { 
        return (
            <div>
                <input type="number" defaultValue={this.state.caosDefault} min="1" max="9" onChange={this.cambiaValoreCaos}></input>
            </div>
        );
    }
}
 
export default Caos;