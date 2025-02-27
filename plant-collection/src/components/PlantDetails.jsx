// PlantDetails.js
import React, { useState, useEffect } from 'react';

function PlantDetails() {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    // Exemple d'API pour obtenir des détails de plante (remplacer avec l'API réelle)
    fetch('https://trefle.io/api/v1/plants?token=-MHEEsUWXCrfVYuO3WCngPHek2ltx7Qbb5LO1t3IqxM') 
      .then(response => response.json())
      .then(data => setPlant(data));
  }, []);

  if (!plant) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>{plant.name}</h2>
      <p>{plant.species}</p>
      <p>{plant.description}</p>
      <img src={plant.image} alt={plant.name} />
    </div>
  );
}

export default PlantDetails;
