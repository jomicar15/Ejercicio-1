import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/object';

const ComponenteB = ({contacto}) => {

    //utilizando useState para utilizar hook
    //const [variable, método para actualizarlo] = useState (valor inicial);

    const [connected, setConnected] = useState(contacto.conectado);

    // const [age,setAge] = useState(28);
    
    // const birthday = ()=>{
    //     setAge(age+1);
    // }

    const conectar = () =>{
        contacto.conectado =  connected ? false : true;
        setConnected (contacto.conectado);
    }

    return (
    <div>
        <h1>Nombre: { contacto.name }</h1>
        <h2>Apellido: { contacto.lastName}</h2>
        <h3>Email: { contacto.email }</h3>
        <h4>{ contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible" }</h4>
        <button onClick={conectar} >{ contacto.conectado ? "Desconectar" : "Conectar" }</button>
    </div>
  )
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;