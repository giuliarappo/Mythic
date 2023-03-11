import React from 'react'
import Dado from './Dado';

export default function EventoInaspettato() {

    const dimmiEvento = (risposta) => {
        if (risposta < 50) {
            console.log("e' sotto 50")
        } else {
            console.log("e' sopra 50")
        }
    }

  return (
    <div>
        <Dado calcolaRisposta={dimmiEvento}/>
        <h2>Evento inaspettato!</h2>
        <p>Lancia un dado d100 per scoprire di che evento si tratta!</p>
        
    </div>
  )
}
