import './miLista.css';
import React, {useState} from "react";

//función que siempre retorna un único componente
function MiLista() {
    const [incidencias, setIncidencias] = useState([
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
    }])

        return(
            //se puede poner <></> que se llaman fragmentos, o dentro de un <div></div>
            <>
                <ul>
                    {incidencias.map((i) => (
                        <li><strong>Titulo:</strong> {i.titulo}, <br/>
                        <strong>Descripción:</strong> {i.descripcion},<br/>
                        <strong>Usuario:</strong> {i.id_usuario}, <br/>
                        <strong>Ubicación:</strong> {i.ubicacion},<br/><br/> </li>
                    ))}
                </ul>
            </>
        )
}
//por defecto debe tener
export default MiLista