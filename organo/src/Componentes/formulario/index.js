import BotaoEnviar from '../BotaoEnviar_Formulario';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'DevOps',
        'Mobile',
        'UX e Desgin'
    ]

    const aoSalvar= (evento) =>{
        evento.preventDefault();
        console.log('Form Foi Enviado')
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados Para Criar o Card Do Colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite Seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite Seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
                <ListaSuspensa label='Time' itens={times}></ListaSuspensa>
                <BotaoEnviar texto="Criar Card"></BotaoEnviar>
            </form>
        </section>
    )
}

export default Formulario;
