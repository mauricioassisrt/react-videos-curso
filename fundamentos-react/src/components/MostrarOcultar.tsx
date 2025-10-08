import { useState } from "react";

export function MostrarOcultar(){

    const [visivel, setVisivel] = useState(true)

    function alterarVisibilidade(){
        setVisivel(!visivel)
    }

    return (

        <div>
            <button onClick={alterarVisibilidade}>
                {visivel ? "Ocultar": "Mostrar"} Mensagem
            </button>

            {visivel && (
                <p>
                    Esta mensagem pode ser oculta
                </p>
            )}
        </div>
    )
}