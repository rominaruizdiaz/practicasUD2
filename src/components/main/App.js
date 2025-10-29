import './App.css';
import React from 'react';
import MiLista from '../miLista/miLista.js';
import Formu from '../form/Formu.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

class App extends React.Component {
  
  state = {
    incidencias: [
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
    ]
  };

  
    agregarIncidencia = (nuevo_id_incidencia, nuevo_usuario, nuevo_titulo, nuevo_descripción, nuevo_categoria,
        nuevo_nivel_urgencia, nuevo_ubicacion, nuevo_fecha_registro, nuevo_estado) =>{
        const nueva_incidencia = {
            id_incidencia: nuevo_id_incidencia,
            id_usuario: nuevo_usuario,
            titulo: nuevo_titulo,
            descripcion: nuevo_descripción,
            categoria: nuevo_categoria,
            nivel_urgencia: nuevo_nivel_urgencia,
            fecha_registro: nuevo_fecha_registro,
            estado: nuevo_estado,
            ubicacion: nuevo_ubicacion
            } 
        console.log("Datos recibidos: ", nueva_incidencia);
        this.setState({incidencias:[...this.state.incidencias, nueva_incidencia]})
    }

  render(){
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
              <MiLista incidencias={this.state.incidencias} />
            </div>
            <div className="app__panel app__panel--right">
              <Formu agregarIncidencia={this.agregarIncidencia} />
            </div>
          </section>
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
