import { useState } from 'react';
import Banner from './Componentes/banner/banner.js';
import Formulario from './Componentes/formulario/index.js';


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
    </div>
  );
}

export default App;
