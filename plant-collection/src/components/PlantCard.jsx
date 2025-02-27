import React from 'react';

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>{plant.species}</p>
      <p>{plant.description}</p>
    </div>
  );
}

export default PlantCard;
