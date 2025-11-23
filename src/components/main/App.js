import React, { useState } from "react";

import MiLista from "../miLista/miLista.js";
import Formu from "../form/Formu.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";

import Fondo from "../../img/fondo.png";

function App() {
  const [incidencias, setIncidencia] = useState([
    {
      id_incidencia: 1,
      id_usuario: "e768590345h",
      titulo: "Proyector averiado en aula 2",
      descripcion: "El proyector no enciende",
      categoria: "Hardware",
      nivel_urgencia: "Alta",
      fecha_registro: "2025-03-20",
      estado: "Abierto",
      ubicacion: "A301",
    },
    {
      id_incidencia: 2,
      id_usuario: "g138204639a",
      titulo: "Pantalla rota en aula 3",
      descripcion: "La pantalla está dañada y no muestra imagen",
      categoria: "Hardware",
      nivel_urgencia: "Alta",
      fecha_registro: "2025-03-20",
      estado: "Abierto",
      ubicacion: "B301",
    },
    {
      id_incidencia: 3,
      id_usuario: "j3529056483t",
      titulo: "Problemas con conexión Wi-Fi",
      descripcion: "La red no se conecta correctamente en el aula C301",
      categoria: "Red",
      nivel_urgencia: "Media",
      fecha_registro: "2025-03-20",
      estado: "Abierto",
      ubicacion: "C301",
    },
  ]);

  const agregarIncidencia = (
    nuevo_usuario,
    nuevo_titulo,
    nuevo_descripcion,
    nuevo_categoria,
    nuevo_nivel_urgencia,
    nuevo_ubicacion
  ) => {
    const fecha = new Date();
    const fechaFormateada = `${fecha.getFullYear()}-${String(
      fecha.getMonth() + 1
    ).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`;

    const nueva_incidencia = {
      id_incidencia: incidencias.length + 1,
      id_usuario: nuevo_usuario,
      titulo: nuevo_titulo,
      descripcion: nuevo_descripcion,
      categoria: nuevo_categoria,
      nivel_urgencia: nuevo_nivel_urgencia,
      fecha_registro: fechaFormateada,
      estado: "Abierto",
      ubicacion: nuevo_ubicacion,
    };

    setIncidencia([...incidencias, nueva_incidencia]);
    console.log("Datos recibidos:", nueva_incidencia);
  };

  return (
    <div
      className="card bg-light p-4"
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />

      <h2 className="mb-4 text-center">
        <span className="bg-white text-dark p-2 rounded d-inline-block">
          Mi aplicación
        </span>
      </h2>

      <div className="container-fluid mt-4 d-flex row g-5">
        <main className="col-md-6">
          <p>
            <span className="bg-white text-dark p-1 rounded d-inline-block">
              Esta aplicación muestra el contenido almacenado de mi app:
            </span>
          </p>
          <MiLista incidencias={incidencias} />
        </main>

        <aside className="col-md-6">
          <Formu agregarIncidencia={agregarIncidencia} />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default App;
