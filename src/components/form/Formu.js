import React from "react";

class Formu extends React.Component {
  envioFormulario = (event) => {
    event.preventDefault();
    const form = event.target;

    this.props.agregarIncidencia(
      form.usuario.value,
      form.titulo.value,
      form.descripcion.value,
      form.categoria.value,
      form.nivel.value,
      form.ubicacion.value
    );
  };

  render() {
    return (
      <div className="card p-4">
        <h2 className="card-title mb-4 text-center">Registrar incidencia</h2>

        <form onSubmit={this.envioFormulario}>

          <div className="mb-3">
            <label className="form-label">Título incidencia</label>
            <input type="text" name="titulo" required className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="text" name="usuario" required className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea name="descripcion" required className="form-control"></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Nivel de urgencia</label>
            <select name="nivel" required className="form-control">
              <option value="">Seleccionar...</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select name="categoria" required className="form-control">
              <option value="">Seleccionar...</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Red">Red</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Ubicación</label>
            <input type="text" name="ubicacion" required className="form-control" />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-success">
              Registrar incidencia
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default Formu;
