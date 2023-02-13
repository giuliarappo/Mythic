import React, { useState } from "react";

const InputDomanda = () => {

    const [input, setInput] = useState('');
    const [domanda, setDomanda] = useState([]);

    const domandaDigitata = (e) => {
        setInput(e.target.value);
    }

    const domandaConfermata = (e) => {
        e.preventDefault();
        setDomanda(
            [
                ...domanda,
                {
                    testo: input,
                    risposta: 'risposta'
                }
            ]
        )
        
        
    }
    


    return(
        <div>
            <form>
                <labe>Inserisci la risposta</labe>
                <input onChange={domandaDigitata}></input>
                <button onClick={domandaConfermata}>Fai la domanda</button>
            </form>
            
            {domanda.map((domandaCorrente) => {

                return(
                    <h1>{domandaCorrente.testo}</h1>
                )
            }
                
            ) }
        </div>
    )

}

export default InputDomanda