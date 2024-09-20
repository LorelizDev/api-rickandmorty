import { useState, useEffect } from 'react';
import { getCharacters } from './services/services';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getCharacters();
      setData(characters);
    };

    fetchCharacters();
  }, []);

  // Filtrar personajes según la búsqueda
  const filteredCharacters = data.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Rick and Morty</h1>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="characters-card">
        {filteredCharacters.map((char) => (
          <div className="character-card" key={char.id}>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>Género: {char.gender}</p>
            <p>Especie: {char.species}</p>
            <p>Status: {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
