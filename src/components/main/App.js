import './App.css';
import React, { useState } from 'react';
import MiLista from '../miLista/miLista.js';
import Formu from '../form/Formu.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

function App() {

  const [incidencias, setIncidencia] = useState([
    {
      id_incidencia: 1,
      id_usuario: 'e768590345h',
      titulo: 'Proyector averiado en aula 2',
      descripcion: 'El proyector no enciende',
      categoria: 'Hardware',
      nivel_urgencia: 'Alta',
      fecha_registro: '2025-03-20',
      estado: 'Abierto',
      ubicacion: 'A301'
    },
    {
      id_incidencia: 2,
      id_usuario: 'g138204639a',
      titulo: 'Pantalla rota en aula 3',
      descripcion: 'La pantalla está dañada y no muestra imagen',
      categoria: 'Hardware',
      nivel_urgencia: 'Alta',
      fecha_registro: '2025-03-20',
      estado: 'Abierto',
      ubicacion: 'B301'
    },
    {
      id_incidencia: 3,
      id_usuario: 'j3529056483t',
      titulo: 'Problemas con conexión Wi-Fi',
      descripcion: 'La red no se conecta correctamente en el aula C301',
      categoria: 'Red',
      nivel_urgencia: 'Media',
      fecha_registro: '2025-03-20',
      estado: 'Abierto',
      ubicacion: 'C301'
    }
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
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fechaFormateada = `${year}-${month}-${day}`;

    const nueva_incidencia = {
      id_incidencia: incidencias.length + 1,
      id_usuario: nuevo_usuario,
      titulo: nuevo_titulo,
      descripcion: nuevo_descripcion,
      categoria: nuevo_categoria,
      nivel_urgencia: nuevo_nivel_urgencia,
      fecha_registro: fechaFormateada,
      estado: "Abierto",
      ubicacion: nuevo_ubicacion
    };

    setIncidencia([...incidencias, nueva_incidencia]);
    console.log("Datos recibidos:", nueva_incidencia);
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <section className="app__content">
          <div className="app__panel app__panel--left">
            <section className="app__intro">
              <h1 className="app__title">Hola mundo</h1>
              <h2 className="app__subtitle">Este es mi primer componente React</h2>
              <p className="app__text">
                Bienvenido a mi aplicación, esto fue creado con Javascript en React.
              </p>
            </section>

            <MiLista incidencias={incidencias} />
          </div>

          <div className="app__panel app__panel--right">
            <Formu agregarIncidencia={agregarIncidencia} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
