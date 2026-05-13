import React, { useState, useEffect }from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  }
  function toggleSoldOut(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  }
  
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants={filteredPlants} 
      toggleSoldOut={toggleSoldOut} 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      onAddPlant={handleAddPlant}
      />
    </div>
  );
}

export default App;
