import React, { useEffect, useState } from "react";

import MiLista from "../miLista/miLista.js";
import Formu from "../form/Formu.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";

import Fondo from "../../img/fondo.png";

function App() {
  const INCIDENCIA_API_URL = 'http://localhost:3004/incidencias';
  const USUARIO_API_URL = 'http://localhost:3004/users';

  const [usuarios, setUsuarios] = useState([]);
  const [incidencias, setIncidencia] = useState([]);

  useEffect (()=>{

    const obtenerIncidencias = async () => {
      try{
        let response = await fetch (INCIDENCIA_API_URL);
        if(!response.ok){
          throw new Error("HTTP Error");
        }
        const data = await response.json();
        console.log(data);
        setIncidencia(data);
      } catch(e){
        console.error("Error al cargar las incidencias:", e);
      }
    }
    const obtenerUsuarios = async () => {
      try{
        let response = await fetch (USUARIO_API_URL);
        if(!response.ok){
          throw new Error("HTTP Error");
        }
        const data = await response.json();
        console.log(data);
        setUsuarios(data);
      } catch(e){
        console.error("Error al cargar los usuarios:", e);
      }
    }

    obtenerIncidencias();
    obtenerUsuarios();
  },[]);

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
