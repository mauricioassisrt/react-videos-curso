import './App.css';
import Mensagem from './components/Mensagem.tsx';
import Saudacao from './components/Saudacao.tsx';

function App() {
  return (
    <div>
      {/* <Mensagem /> */}
      <Saudacao 
      nome={"Mauricio"}
      />
    </div>
  );
}

export default App;
