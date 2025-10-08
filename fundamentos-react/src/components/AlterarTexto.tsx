import { useState } from "react";

export function AlterarTexto() {
  const [texto, setTexto] = useState("Olá, React!");
  function mudarTexto() {
    if (texto === "Olá, React!") {
      setTexto("Estado foi alterado! 🎉");
    } else {
      setTexto("Olá, React!");
    }
  }
  return (
    <div>
      <h2>{texto}</h2>
      <button onClick={mudarTexto}> Mudar texto</button>
    </div>
  );
}
