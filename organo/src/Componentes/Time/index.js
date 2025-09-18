
import Colaborador from '../Colaborador/index.js'
import './time.css'

const Time = (props) =>{
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria, color: props.corPrimaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}></Colaborador>)}
            </div>
        </section>
    )
}

export default Time