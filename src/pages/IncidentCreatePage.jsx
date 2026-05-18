import { useEffect, useState } from "react";
import CreateIncident from "../components/features/form/CreateIncident.js";

export default function IncidentCreatePage() {
  const [usuarios, setUsuarios] = useState([]);

  const USUARIO_API_URL = "http://localhost:3004/users";
  const INCIDENCIA_API_URL = "http://localhost:3004/incidencias";

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const res = await fetch(USUARIO_API_URL);
      setUsuarios(await res.json());
    };

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
    const usuarioEncontrado = usuarios.find(u => u.email === usuarioEmail);

    if (!usuarioEncontrado) {
      alert("Usuario no encontrado");
      return;
    }

    const nuevaIncidencia = {
      userId: usuarioEncontrado.id,
      titulo,
      descripcion,
      categoria,
      nivel_urgencia: nivelUrgencia,
      fecha_registro: new Date().toISOString().split("T")[0],
      ubicacion,
      estado: "Abierta",
      comentarios: []
    };

    await fetch(INCIDENCIA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaIncidencia)
    });

    alert("Incidencia creada");
  };

  return <CreateIncident agregarIncidencia={agregarIncidencia} />;
}