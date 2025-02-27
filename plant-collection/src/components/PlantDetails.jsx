// PlantDetails.js
import React, { useState, useEffect } from 'react';

function PlantDetails() {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch('https://trefle.io/api/v1/plants?token=-MHEEsUWXCrfVYuO3WCngPHek2ltx7Qbb5LO1t3IqxM', {
      headers: { 'Authorization': 'Bearer ' },
    })
      .then((response) => response.json())
      .then((data) => setPlant(data.data));
  }, []);

  if (!plant) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>{plant.name.common}</h2>
      <p>{plant.family}</p>
      <p>{plant.description}</p>
      <img src={plant.image_url} alt={plant.name.common} />
    </div>
  );
}

export default PlantDetails;