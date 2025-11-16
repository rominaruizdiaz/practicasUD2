import React from "react";
import "./Formu.css";

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
      <div className="formulario">
        <h2>Registrar incidencia</h2>
        <form onSubmit={this.envioFormulario}>
          <div className="elemento-form">
            <label>Título incidencia</label>
            <input type="text" name="titulo" required />
          </div>

          <div className="elemento-form">
            <label>Usuario</label>
            <input type="text" name="usuario" required />
          </div>

          <div className="elemento-form">
            <label>Descripción</label>
            <textarea name="descripcion" required></textarea>
          </div>

          <div className="elemento-form">
            <label>Nivel de urgencia</label>
            <select name="nivel" required>
              <option value="">Seleccionar...</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <div className="elemento-form">
            <label>Categoría</label>
            <select name="categoria" required>
              <option value="">Seleccionar...</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Red">Red</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="elemento-form">
            <label>Ubicación</label>
            <input type="text" name="ubicacion" required />
          </div>

          <button type="submit" className="elemento-form-button">
            Registrar
          </button>
        </form>
      </div>
    );
  }
}

export default Formu;
