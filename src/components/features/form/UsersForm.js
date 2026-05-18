import { useState } from "react";

export default function UsersForm({ onUsuarioCreado }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USUARIO_API_URL = "http://localhost:3004/users";

  const crearUsuario = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      email,
      password,
      rol: "user",
    };

    try {
      await fetch(USUARIO_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      setEmail("");
      setPassword("");

      onUsuarioCreado();
    } catch (error) {
      console.error("Error creando usuario:", error);
    }
  };

  return (
    <form onSubmit={crearUsuario} className="mb-3">

      <h5>Crear usuario</h5>

      <input
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary">
        Crear usuario
      </button>
    </form>
  );
}