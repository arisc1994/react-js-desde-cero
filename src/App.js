import rickmorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  // Generar un state para pasar toda la información para después usarlo y renderizarlo
  const [characters, setCharacters] = useState(null);

  //const {characters, setCharacter} = useState(null);

  // Defino una función asíncrona para hacer una petición a la API de Rick and Morty
  const reqApi = async () => {
    // Hago la petición a la API
    const api = await fetch("https://rickandmortyapi.com/api/character/");
    
    // Convierto la respuesta a JSON
    const characterApi = await api.json();

    // Muestro en consola el  nombre del personaje principal y su imagen
    //console.log(characterApi);
    setCharacters(characterApi.results);
  };

  //console.log(characters);

  // Devuelvo el componente JSX con el botón que, al hacer click, ejecutará la función reqApi
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? <Characters characters={characters} setCharacters= {setCharacters}/> : null}
        <>
        <img src={rickmorty} alt='Rick & Morty' className='img-home'></img>
        <button onClick={reqApi} className='btn-search'>Buscar personaje</button>
        </>
        
      </header>
    </div>
  );
}

export default App;