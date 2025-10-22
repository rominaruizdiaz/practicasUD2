import './miLista.css';
import React from "react";

//función que siempre retorna un único componente
class miLista extends React.Component{
    //variable de estado para que se puedan modificar las incidencias

    state = {incidencias :[
    {
        id_incidencia:1,
        id_usuario: 'e768590345h',
        titulo: 'Proyector averiado en aula 2',
        descripcion: 'El proyector no enciende ',
        categoria: 'Hardware',
        nivel_urgencia: 'Alta',
        fecha_registro: '2025-20-03',
        estado: 'Abierto',
        ubicacion: 'A301'  
    },    
    {
        id_incidencia:2,
        id_usuario: 'g138204639a',
        titulo: 'Proyector averiado en aula 2',
        descripcion: 'El proyector no enciende ',
        categoria: 'Hardware',
        nivel_urgencia: 'Alta',
        fecha_registro: '2025-20-03',
        estado: 'Abierto',
        ubicacion: 'B301'   
    },    
    {
        id_incidencia:3,
        id_usuario: 'j3529056483t',
        titulo: 'Proyector averiado en aula 2',
        descripcion: 'El proyector no enciende ',
        categoria: 'Hardware',
        nivel_urgencia: 'Alta',
        fecha_registro: '2025-20-03',
        estado: 'Abierto',
        ubicacion: 'C301'  
    }
    ]};
    render(){

        return(
            //se puede poner <></> que se llaman fragmentos, o dentro de un <div></div>
            <>
                <ul>
                    {this.state.incidencias.map((i) => (
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