import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Somar</button>
      <button onClick={decrementar}>Sub</button>
        <button onClick={resetar}>rest</button>
      
    </div>
  );
}
