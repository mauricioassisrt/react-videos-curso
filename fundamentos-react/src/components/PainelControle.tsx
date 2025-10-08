import { useState } from "react";

export function PainelControle(){
    const [nome, setNome] = useState("Visitante");
    const[contador, setContador]= useState(0);
    const[ligado, setLigado] = useState(false);

    return (

        <div>
            <h2>Painel de controle</h2>
            <div style={{ marginBottom: '20px' }}>
                <h3>Contado {contador}</h3>
                <button onClick={()=> setContador(contador+1)}>+1</button>
                
                <button onClick={()=> setContador(contador-1)}>-1</button>
                
                <button onClick={()=> setContador(0)}>Rest</button>
            </div>
            <div style={{ marginBottom: '20px' }}>

                <h3>Olá {nome}</h3>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome"
                />
            </div>
            <div>
                <h3>Status: {ligado ? " Ligado" : "Desligado"}</h3>
                <button onClick={()=>{setLigado(!ligado)}}> {ligado ? " Desligar": "Ligar"}</button>
            </div>
        </div>
        
    )

}