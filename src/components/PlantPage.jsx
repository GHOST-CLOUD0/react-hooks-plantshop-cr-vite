import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, toggleSoldOut, searchTerm, setSearchTerm, onAddPlant}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default PlantPage;
