import { useState } from 'react';
import Banner from './Componentes/banner/banner.js';
import Formulario from './Componentes/formulario/index.js';
import Time from './Componentes/Time/index.js';
import Rodape from './Componentes/Rodape/index.js';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColocaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: ' #57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: ' #82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data-Science',
      corPrimaria: ' #a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Mobile',
      corPrimaria: ' #ffb405',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'UX e Desgin',
      corPrimaria: ' #db6ebf',
      corSecundaria: '#fae9f5'
    }
  ]

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section>
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColocaboradorAdicionado(colaborador)}></Formulario>
      </section>

      <section>

        {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}></Time>)}
      </section>

      <section>
        <Rodape></Rodape>
      </section>
    </div>
  );
}

export default App;
