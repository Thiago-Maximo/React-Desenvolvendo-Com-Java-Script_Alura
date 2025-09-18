import { useState } from 'react';
import BotaoEnviar from '../BotaoEnviar_Formulario';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = (props) => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data-Science',
        'Mobile',
        'UX e Desgin'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
          nome: nome,
          cargo: cargo,
          imagem: imagem,
          time: time
        })
    }


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados Para Criar o Card Do Colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite Seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} label="Cargo"
                    placeholder="Digite Seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o Endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label='Time'
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                ></ListaSuspensa>
                <BotaoEnviar texto="Criar Card"></BotaoEnviar>
            </form>
        </section>
    )
}

export default Formulario;
