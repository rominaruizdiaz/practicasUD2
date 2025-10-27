import './App.css';
import React from 'react';
import MiLista from '../miLista/miLista.js';
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

  render(){
    return (
      <div>
        <Header/>
        <h1>Hola mundo</h1>
        <h2>Este es mi primer componente React</h2>
        <div>
          <p>Bienvenido a mi aplicación, esto fue creado con Javascript en React.</p>
        </div>
        <MiLista incidencias={this.state.incidencias}/>
        <Footer/>
  
      </div>
    );
  }
}

export default App;
