import './botao.css'

const BotaoEnviar = (props) =>{
    return(
        <button className='botao'>{props.texto}</button>
    )
}

export default BotaoEnviar