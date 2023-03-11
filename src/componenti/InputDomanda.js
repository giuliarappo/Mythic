import React from "react";

const InputDomanda = ({domande, domandaEffettuata, eliminaDomanda}) => {

    let input;

    const domandaDigitata = (e) => {
        input = e.target.value;
    }

    const domandaConfermata = (e) => {
        e.preventDefault();
        domandaEffettuata(input);
        
    }
    


    return(
        <div>
            <form>
                <label>Inserisci la risposta</label>
                <input onChange={domandaDigitata}></input>
                <button onClick={domandaConfermata}>Fai la domanda</button>
            </form>
            
            {domande.map((domandaCorrente, indexDomanda) => {

                return(
                    <div>
                        <h1>{domandaCorrente.testo}</h1>
                        <button onClick={() => eliminaDomanda(indexDomanda)}>Elimina</button>
                    </div>
                )
            }
                
            ) }
        </div>
    )

}

export default InputDomanda