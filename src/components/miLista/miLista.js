import './miLista.css';

function MiLista(props) {
    return (
        <>
            <ul>
                {props.incidencias.map((i, index) => (
                    <li key={index}>
                        <strong>ID:</strong> {i.id_incidencia} <br />
                        <strong>Título:</strong> {i.titulo} <br />
                        <strong>Usuario:</strong> {i.id_usuario} <br />
                        <strong>Descripción:</strong> {i.descripcion} <br />
                        <strong>Ubicación:</strong> {i.ubicacion} <br />
                        <strong>Estado:</strong> {i.estado} <br />
                        <strong>Fecha:</strong> {i.fecha_registro} <br /><br />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MiLista;
