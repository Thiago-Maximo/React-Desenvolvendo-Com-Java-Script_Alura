import { useState } from 'react';
import Banner from './Componentes/banner/banner.js';
import Formulario from './Componentes/formulario/index.js';
import Time from './Componentes/Time/index.js';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColocaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([colaboradores, colaborador])
  }

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section>
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColocaboradorAdicionado(colaborador)}></Formulario>
      </section>

      <section>
        <Time nome="Programação"></Time>
      </section>
    </div>
  );
}

export default App;
