function MiLista(props) {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover shadow-sm table-light">
                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Usuario</th>
                        <th>Descripción</th>
                        <th>Ubicación</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>

                <tbody>
                    {props.incidencias.map((i, index) => (
                        <tr key={index}>
                            <td>{i.id_incidencia}</td>
                            <td>{i.titulo}</td>
                            <td>{i.id_usuario}</td>
                            <td>{i.descripcion}</td>
                            <td>{i.ubicacion}</td>
                            <td>{i.estado}</td>
                            <td>{i.fecha_registro}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default MiLista;
