import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) =>{
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria, color: props.corPrimaria}}>
            <h3>{props.nome}</h3>
            <Colaborador></Colaborador>
        </section>
    )
}

export default Time