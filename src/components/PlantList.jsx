import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants=[], toggleSoldOut}) {
  if (plants.length === 0) {
    return <p>No plants found.</p>;
  }
  return (
    <ul className="plant-list">
      {plants.map((plant) => (
        <PlantCard 
        key={plant.id} 
        plant={plant} 
        toggleSoldOut={toggleSoldOut} />
      ))}
    </ul>
  );
}

export default PlantList;
