import React, { useState } from 'react'
import Carnet from './Carnet'

const labelStyleColon = "rounded-pill m-2 w-50  text-center mb-2 bg-dark text-danger";
const labelStyleUnion = "rounded-pill m-2 w-50  text-center mb-2 bg-danger text-light";

const initialSocio = {
    dni: '',
    correoElectronico: '',
    nombre: '',
    apellido: '',
    direccion: '',
    altura: '',
    ciudad: '',
    fechaDeNacimiento: ''
}

    const initialGuardado = {}
    const initialVisible = false;

const Formulario = ({ equipo, titulo }) => {
    const [socio, setSocio] = useState(initialSocio);
    const [guardado, setGuardado] = useState(initialGuardado)
    const [visible, setVisible] = useState(initialVisible)
    

    const handleInputChange = (e) => {
        setSocio({
            ...socio,
            [e.target.name] : e.target.value
        })
    }

  const scrollSubir = () => {
      window.scroll(0,100);
  }

    const enviarDatos = (e) => {
        setGuardado(socio);
        setSocio(initialSocio);
        e.preventDefault()
        setVisible(true);
        scrollSubir();
    }

   
    

    return (
        <div className="tamaño" > 
        {  visible && <Carnet socio={guardado} equipo={equipo} /> }
           <form onSubmit={enviarDatos} className={`row ${equipo === 1 ? 'fondo-colon' : 'fondo-union'} `}  method="post" action="hacete-socio">
                <div className="form-row ">
                    <h1 className={`text-center text-danger mt-2 rounded p-1
                        ${titulo === 'COLON DE SANTA FE'
                        ? 'bg-dark'
                        : 'bg-white'}
                        `}>{titulo}</h1>

                <div className="row d-flex justify-content-center" >

                    <div className="col-md-4  mb-3">
                        <label for="dni"
                        className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >DNI</label>
                        <input value={socio.dni} onChange={handleInputChange} type="number" className="form-control rounded-pill" name="dni" placeholder="N°" required />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="correoElectronico"
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Correo electrónico</label>
                        <input value={socio.correoElectronico} onChange={handleInputChange} type="email" className="form-control  rounded-pill" name="correoElectronico" placeholder="correo electronico"  required />
                    </div>


                </div>

                <div className="row d-flex justify-content-center" >

                    <div className="col-md-4 mb-3">
                        <label for="nombre"  
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Nombre</label>
                        <input value={socio.nombre} onChange={handleInputChange} type="text" className="form-control rounded-pill" name="nombre" placeholder="Nombre" required />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="apellido"  
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Apellido</label>
                        <input value={socio.apellido} onChange={handleInputChange} type="text" className="form-control rounded-pill" name="apellido" placeholder="Apellido"  required />
                    </div>
                
                </div>

                <div className="row d-flex justify-content-center" >

                    <div className="col-md-4 mb-3">
                        <label for="direccion" 
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Dirección</label>
                        <input value={socio.direccion} onChange={handleInputChange} type="text" className="form-control rounded-pill" name="direccion" placeholder="Calle" required />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="altura" 
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Altura</label>
                        <input value={socio.altura} onChange={handleInputChange} type="number" className="form-control rounded-pill" name="altura" placeholder="Altura" required />
                    </div>

                </div>

                <div className="row d-flex justify-content-center" >

                    <div className="col-md-4 mb-3">
                        <label for="ciudad" 
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Ciudad</label>
                        <input value={socio.ciudad} onChange={handleInputChange} type="text" className="form-control  rounded-pill" name="ciudad" placeholder="Ciudad" required />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="fechaNacimiento"  
                         className={`${equipo === 1 ? labelStyleColon : labelStyleUnion } `}
                        >Fecha de Nacimiento</label>
                        <input value={socio.fechaDeNacimiento} onChange={handleInputChange} type="date" className="form-control rounded-pill" name="fechaDeNacimiento" placeholder="Dia/Mes/Año" required />
                    </div>

                </div>

            <div className="row d-flex justify-content-center m-2" >

                <div className="form-group col-md-4">
                    <div className="form-check">
                        <input onChange={handleInputChange} className="form-check-input" type="checkbox"  id="invalidCheck3" required />
                        <label  className="bg-white text-dark text-center rounded" for="invalidCheck3" >
                            Aceptar los términos y condiciones
                        </label>
                    </div>
                </div>

            </div>

            <div className=" d-flex justify-content-center ">
            <div className="row col-md-6 mb-5">
                    <button
                    className={`btn text-center text-danger m-2 rounded p-2 mb-2  shadow border-danger
                    ${titulo === 'COLON DE SANTA FE'
                    ? 'btn-dark'
                    : 'btn-light'}
                    `}
                    type="submit" >HACERME SOCIO</button>
            </div>
            </div>
        
        </div>
    
        

       
    </form>
</div>

    )
}

export default Formulario
