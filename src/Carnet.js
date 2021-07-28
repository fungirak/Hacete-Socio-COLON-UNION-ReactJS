import React from 'react'
import logoColon from './img/escudo-colon.png'
import logoUnion from './img/escudo-union.png'

const Carnet = ({socio, equipo}) => {
    console.log(socio)
    const {dni, nombre, apellido, direccion, altura, ciudad,  fechaDeNacimiento} = socio;


    return (
        <div className="mt-1 mb-5 col-sm-10 col-md-4 posicion">
                <h1 className="text-center text-white text-shadow">NUEVO SOCIO</h1>
                <div className="text-overflow card border border-dark border-1 rounded m-3 p-1 shadow-lg col-sm-10  altura-carnet">
                
                    <span className="d-flex justify-content-around m-1">

                        <span className="">
                            <img src={` ${equipo === 1 ? logoColon : logoUnion }`} alt="" className="foto-carnet " />
                        </span>
                        <div className="">
                            <div className="bg-dark text-light w-100 text-center rounded">
                                <span style={{ textTransform: 'uppercase'}}>{nombre}</span>
                                <span style={{ textTransform: 'uppercase'}}>{apellido}</span>
                            </div>

                            <div className="">
                                <span>DNI  </span>
                                <span> {dni}</span>
                            </div>
                        
                            <div className="">
                                <div>Domicilio:</div>
                                <span>{direccion}</span>
                                <span>{altura} </span>
                            </div>
                            <div>Localidad: {ciudad}</div>
                        
                            <div>
                                <span>F.Nac: {fechaDeNacimiento}</span>
                            </div>
                        </div>
                    </span>
                </div>   
            </div>

        )
}

export default Carnet
