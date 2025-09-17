import BotaoEnviar from '../BotaoEnviar_Formulario';
import CampoTexto from '../CampoTexto';
import './formulario.css';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os Dados Para Criar o Card Do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite Seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite Seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
                <BotaoEnviar></BotaoEnviar>
            </form>
        </section>
    )
}

export default Formulario;
