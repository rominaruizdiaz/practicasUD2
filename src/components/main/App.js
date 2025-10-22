import './App.css';
import MiLista from '../miLista/MiLista.js';
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
      <MiLista />
      <Footer/>

    </div>
  );
}

export default App;
