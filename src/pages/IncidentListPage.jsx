import { useEffect, useState } from "react";
import CardIncident from "../components/features/incident/CardIncident.js";

export default function IncidentListPage() {
  const [incidencias, setIncidencias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const INCIDENCIA_API_URL = "http://localhost:3004/incidencias";
  const USUARIO_API_URL = "http://localhost:3004/users";

  useEffect(() => {
    const cargar = async () => {
      const inc = await fetch(INCIDENCIA_API_URL);
      const usr = await fetch(USUARIO_API_URL);

      setIncidencias(await inc.json());
      setUsuarios(await usr.json());
    };

    cargar();
  }, []);

  const cerrarIncidencia = async (id) => {
    try {
      await fetch(`${INCIDENCIA_API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "Cerrada",
        }),
      });

      setIncidencias((prev) =>
        prev.map((inc) =>
          inc.id === id
            ? { ...inc, estado: "Cerrada" }
            : inc
        )
      );
    } catch (error) {
      console.error("Error al cerrar incidencia:", error);
    }
  };

  return (
    <CardIncident
      incidencias={incidencias}
      usuarios={usuarios}
      onCerrarIncidencia={cerrarIncidencia}
    />
  );
}