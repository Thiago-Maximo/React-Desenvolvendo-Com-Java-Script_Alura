import Banner from './Componentes/banner/banner.js';
import Campotexto from './Componentes/campotexto/';

function App() {
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section>
        <Campotexto label ="Nome" placeholder="Digite Seu Nome"></Campotexto>
        <Campotexto label ="Cargo" placeholder="Digite Seu Cargo"></Campotexto>
        <Campotexto label ="Imagem" placeholder="Digite o Endereço da Imagem"></Campotexto>
      </section>
    </div>
  );
}

export default App;
