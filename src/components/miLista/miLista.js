import './miLista.css';
import React from "react";

//función que siempre retorna un único componente
class miLista extends React.Component{
    //variable de estado para que se puedan modificar las incidencias

    render(){

        return(
            //se puede poner <></> que se llaman fragmentos, o dentro de un <div></div>
            <>
                <ul>
                    {this.props.incidencias.map((i) => (
                        <li key={i.id_incidencia}><strong>Titulo:</strong> {i.titulo}, <br/>
                        <strong>Descripción:</strong> {i.descripcion},<br/>
                        <strong>Usuario:</strong> {i.id_usuario}, <br/>
                        <strong>Ubicación:</strong> {i.ubicacion},<br/><br/> </li>
                    ))}
                </ul>
            </>
        )
    }
}

//por defecto debe tener
export default miLista