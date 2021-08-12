import React, { useState } from 'react'
import EscudoUnion from './img/escudo-union.png'
import Formulario from './Formulario';


const Union = ({disabled}) => {
    const [form, setForm] = useState(false);
    const titulo = "UNION DE SANTA FE";

    return (
        <div className="d-flex justify-content-center">
             { !form && 
            <button className="bg-transparent  fondo-union position-absolute w-100 h-100 border border-0" disabled={disabled}
              onClick={() => setForm( !form )} >
                <img src={EscudoUnion} alt="" style={{width: '6em', height: '7em'}} className="latido mt-5"/>
            </button>
            }
            
            { form && <Formulario equipo={0} titulo={titulo} /> }


        </div>
    )
}

export default Union
