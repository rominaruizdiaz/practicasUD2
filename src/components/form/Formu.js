import React from "react";
import "./Formu.css"

class Formu extends React.Component {

    envioFormulario = (event)=>{
        event.preventDefault(); //evita que recargue la página en el navegador
        const form = event.target; //consigue el formulario padre

        this.props.agregarIncidencia(
            form.id.value,
            form.usuario.value,
            form.titulo.value,
            form.descripcion.value,
            form.categoria.value,
            form.nivel.value,
            form.ubicacion.value,
            form.fecha.value,
            form.estado.value
        )

    };

    render() {
        return (
            <div className="formulario">
                <h2>Registrar incidencia</h2>
                <form onSubmit={this.envioFormulario}>
                    <div className="elemento-form">
                        <label>Id incidencia</label>
                        <input type="number" name="id" placeholder="Introduce el id incidencia" required /> <br />
                    </div>
                    <div className="elemento-form">
                        <label>Título incidencia</label>
                        <input type="text" name="titulo" placeholder="Introduce el título" required /> <br />
                    </div>
                    <div className="elemento-form">
                        <label>Usuario</label>
                        <input type="text" name="usuario" required /> <br />
                    </div>
                    <div className="elemento-form">
                        <label>Descripción</label>
                        <textarea name="descripcion" required></textarea> <br />
                    </div>
                    <div className="elemento-form">
                        <label>Nivel de urgencia</label>
                        <select name="nivel" required>
                            <option value="">Seleccionar...</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                    </div>
                    <div className="elemento-form">
                        <label>Estado</label>
                        <select name="estado" required>
                            <option>Abierta</option>
                            <option>En curso</option>
                            <option>Resuelta</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                    <div className="elemento-form">
                    <label>Categoría</label>
                    <select name="categoria" required>
                        <option value="">Seleccionar...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Red</option>
                        <option>Otro</option>
                    </select>
                    </div>

                    <div className="elemento-form">
                        <label>Fecha registro</label>
                        <input type="date" name="fecha" required />
                    </div>
                    <div className="elemento-form">
                        <label>Ubicación</label>
                        <input type="text" name="ubicacion" placeholder="Ej: B205" required />
                    </div>
                    <button type="submit" className="elemento-form-button">Registrar</button>
                </form>
            </div>
        );
    }
}

export default Formu;
