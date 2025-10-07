
type SaudacaoProps={
    nome: string
}

export default function Saudacao({nome}: SaudacaoProps){
 
    return (
      <div>
        Olá <p> {nome}</p>
      </div>
    )
  
}
