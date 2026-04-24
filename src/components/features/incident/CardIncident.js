function CardIncident(props) {
  const getNombreUsuario = (userId) => {
    const user = props.usuarios.find((u) => u.id === userId);
    return user ? user.nombre : "Desconocido";
  };

  return (
    <div className="table-responsive">
      <table
        className="table table-striped table-hover shadow-sm"
        style={{ backgroundColor: "rgba(173, 216, 230, 0.3)" }}
      >
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
          {props.incidencias.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.titulo}</td>
              <td>{getNombreUsuario(i.userId)}</td>
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

export default CardIncident;