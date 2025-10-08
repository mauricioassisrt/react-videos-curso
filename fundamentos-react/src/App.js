import './App.css';
import { AlterarTexto } from './components/AlterarTexto.tsx';
import { Contador } from './components/Contador.tsx';
import { FormularioSimples } from './components/FormularioSimples.tsx';
import { ListaTarefas } from './components/ListaTarefas.tsx';
import Mensagem from './components/Mensagem.tsx';
import { MostrarOcultar } from './components/MostrarOcultar.tsx';
import { PainelControle } from './components/PainelControle.tsx';
import Saudacao from './components/Saudacao.tsx';

function App() {
  return (
    <div>
      {/* <Mensagem /> */}
      {/* <Saudacao 
      nome={"Mauricio"}
      /> */}

      {/* <Contador></Contador> */}
      {/* <AlterarTexto></AlterarTexto> */}
      {/* <MostrarOcultar></MostrarOcultar> */}
      {/* <PainelControle></PainelControle> */}
      {/* <ListaTarefas></ListaTarefas> */}
      <FormularioSimples></FormularioSimples>
    </div>
  );
}

export default App;
