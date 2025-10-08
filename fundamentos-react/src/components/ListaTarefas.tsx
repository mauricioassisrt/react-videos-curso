import { useState } from "react";

export function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  }

  return (
    <div>
      <h2>Minhas Tarefas ({tarefas.length})</h2>
      <input
        onChange={(e) => setTarefa(e.target.value)}
        value={tarefa}
        type="text"
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Add</button>
      <div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}
