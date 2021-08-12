import React, { useState } from 'react'
import EscudoColon from './img/escudo-colon.png'
import Formulario from './Formulario'


const Colon = ({disabled}) => {
    const [form, setForm] = useState(false);
    const titulo = "COLON DE SANTA FE";

    return (
        <div className="d-flex justify-content-center">
            { !form && 
            <button className="bg-transparent  fondo-colon position-absolute w-100 h-100 border border-0 " disabled={disabled}
              onClick={() => setForm( !form )} >
                <img src={EscudoColon} alt="" style={{width: '6em', height: '7em'}} className="latido mt-5" />
            </button>
            }

            { form && <Formulario equipo={1} titulo={titulo} /> }


        </div>
    )
}

export default Colon
