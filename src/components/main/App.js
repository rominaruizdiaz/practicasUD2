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

const agregarIncidencia = async (
  titulo_nuevo, 
  usuario_nuevo, 
  descripcion_nuevo, 
  categoria_nuevo, 
  nivelurgencia_nuevo, 
  ubicacion_nuevo
) => {
  try {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fecha_formateada = `${year}-${month}-${day}`;

    let usuarioEncontrado = usuarios.find((u) => u.email === usuario_nuevo);

    if (usuarioEncontrado) {
      const nueva_incidencia = {
        usuario: usuarioEncontrado.id,
        titulo: titulo_nuevo,
        descripcion: descripcion_nuevo,
        categoria: categoria_nuevo,
        nivel_urgencia: nivelurgencia_nuevo,
        fecha_registro: fecha_formateada,
        ubicacion: ubicacion_nuevo,
        estado: "Abierta",
        comentarios: []
      };

      let response = await fetch(INCIDENCIA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nueva_incidencia),
      });

      if (!response.ok) {
        throw new Error(`Fallo de la petición POST. Estado HTTP: ${response.status}`);
      }

      let data = await response.json();
      console.log("Nueva incidencia:", data);

      setIncidencia([...incidencias, data]);

    } else {
      alert("No se puede crear incidencia. Usuario no encontrado");
      throw new Error("Error al crear incidencia. Usuario no encontrado");
    }
  } catch (e) {
    console.error("Falló la petición POST de la incidencia", e.message);
  }
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
