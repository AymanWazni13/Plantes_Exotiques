import React, { useState } from 'react';
import PlantList from './PlantList';  
function PlantCollection() {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [description, setDescription] = useState('');

  const addPlant = () => {
    if (name && species && description) {
      setPlants([...plants, { id: plants.length + 1, name, species, description }]);
      setName('');
      setSpecies('');
      setDescription('');
    }
  };

  return (
    <div>
      <h1>Plant Collection</h1>
      <input 
        type="text" 
        placeholder="Nom" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Espèce" 
        value={species} 
        onChange={(e) => setSpecies(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button onClick={addPlant}>Ajouter</button>

      {/* Affichage des plantes avec PlantList */}
      <PlantList plants={plants} />
    </div>
  );
}

export default PlantCollection;
