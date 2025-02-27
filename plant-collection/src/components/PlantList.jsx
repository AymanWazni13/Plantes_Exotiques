import React from 'react';
import PlantCard from './PlantCard';  // Importer le composant PlantCard

function PlantList({ plants }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default PlantList;
