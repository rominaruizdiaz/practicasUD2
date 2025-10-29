import './miLista.css';

//función que siempre retorna un único componente
function MiLista(props) {

        return(
            //se puede poner <></> que se llaman fragmentos, o dentro de un <div></div>
            <>
                <ul>
                    {props.incidencias.map((i) => (
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