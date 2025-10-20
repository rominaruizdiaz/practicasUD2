import './App.css';
import MiLista from '../miLista/miLista.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <h1>Hola mundo</h1>
      <h2>Este es mi primer componente React</h2>
      <div>
        <p>Bienvenido a mi aplicación, esto fue creado con Javascript en React.</p>
      </div>
      <MiLista titulo="Clientes" nombre1="Juan" nombre2="Iker" nombre3="Elisa" nombre4="Manuel"/>
      <br/>
      <MiLista titulo="Amigos"  nombre1="Nico" nombre2="Inas" nombre3="Juan" nombre4="Elisse"/>
      <br/>
      <MiLista titulo="Familiares"  nombre1="Carolina" nombre2="Pablo" nombre3="Irene" nombre4="Paula"/>
      <Footer/>

    </div>
  );
}

export default App;
