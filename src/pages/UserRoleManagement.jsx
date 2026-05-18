import { useEffect, useState } from "react";
import UsersForm from "../components/features/users/UsersForm.js";

export default function UserRoleManagement() {
  const [usuarios, setUsuarios] = useState([]);

  const USUARIO_API_URL = "http://localhost:3004/users";

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const res = await fetch(USUARIO_API_URL);
    setUsuarios(await res.json());
  };

  const cambiarRol = async (id, rolActual) => {
    const nuevoRol = rolActual === "admin" ? "user" : "admin";

    try {
      await fetch(`${USUARIO_API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rol: nuevoRol }),
      });

      setUsuarios((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, rol: nuevoRol } : u
        )
      );
    } catch (error) {
      console.error("Error al cambiar rol:", error);
    }
  };

  return (
    <div className="container mt-3">

      <h3>Gestión de usuarios</h3>

      <UsersForm onUsuarioCreado={cargarUsuarios} />

      <hr />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>

              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => cambiarRol(u.id, u.rol)}
                >
                  Cambiar rol
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}