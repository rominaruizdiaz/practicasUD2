import React, { useEffect, useState } from "react";

import CardIncident from "../components/features/incident/CardIncident.js";
import CreateIncident from "../components/features/form/CreateIncident.js";
import Header from "./../components/ui/header/Header.js";
import Footer from "../components/ui/footer/Footer.js";

import Fondo from "../assets/fondo.png";


function IncidentPage() {
  const INCIDENCIA_API_URL = "http://localhost:3004/incidencias";
  const USUARIO_API_URL = "http://localhost:3004/users";

  const [usuarios, setUsuarios] = useState([]);
  const [incidencias, setIncidencias] = useState([]);

  useEffect(() => {
    const obtenerIncidencias = async () => {
      try {
        const response = await fetch(INCIDENCIA_API_URL);
        if (!response.ok) throw new Error("HTTP Error");

        const data = await response.json();
        setIncidencias(data);
      } catch (e) {
        console.error("Error al cargar las incidencias:", e);
      }
    };

    const obtenerUsuarios = async () => {
      try {
        const response = await fetch(USUARIO_API_URL);
        if (!response.ok) throw new Error("HTTP Error");

        const data = await response.json();
        setUsuarios(data);
      } catch (e) {
        console.error("Error al cargar los usuarios:", e);
      }
    };

    obtenerIncidencias();
    obtenerUsuarios();
  }, []);

  const agregarIncidencia = async (
    titulo,
    usuarioEmail,
    descripcion,
    categoria,
    nivelUrgencia,
    ubicacion
  ) => {
    try {
      const fecha = new Date();
      const fecha_formateada = fecha.toISOString().split("T")[0];

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === usuarioEmail
      );

      if (!usuarioEncontrado) {
        alert("Usuario no encontrado");
        return;
      }

      const nuevaIncidencia = {
        usuario: usuarioEncontrado.id,
        titulo,
        descripcion,
        categoria,
        nivel_urgencia: nivelUrgencia,
        fecha_registro: fecha_formateada,
        ubicacion,
        estado: "Abierta",
        comentarios: [],
      };

      const response = await fetch(INCIDENCIA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaIncidencia),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      setIncidencias((prev) => [...prev, data]);

    } catch (e) {
      console.error("Error al crear incidencia:", e.message);
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

          <CardIncident incidencias={incidencias} />
        </main>

        <aside className="col-md-6">
          <CreateIncident agregarIncidencia={agregarIncidencia} />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default IncidentPage;