import React, { useState } from 'react';

function PlantCollection() {
  const [plants, setPlants] = useState([]);
  const [form, setForm] = useState({ name: '', species: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addPlant = () => {
    if (!form.name || !form.species || !form.description) return;
    setPlants([...plants, { id: plants.length + 1, ...form }]);
    setForm({ name: '', species: '', description: '' });
  };

  return (
    <div>
      <h1>Plant Collection</h1>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Nom de la plante"
          value={form.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="species" 
          placeholder="Espèce"
          value={form.species} 
          onChange={handleChange} 
        />
        <textarea 
          name="description"
          placeholder="Description"
          value={form.description} 
          onChange={handleChange} 
        />
        <button type="button" onClick={addPlant}>Ajouter</button>
      </form>

      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.name} ({plant.species}): {plant.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlantCollection;
