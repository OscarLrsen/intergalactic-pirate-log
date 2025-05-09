import {useState} from 'react';
import Ships from './spaceships';
import SpaceshipForm from './components/SpaceshipForm';





function App() {
const [ships, setSpaceships]= useState ([
  {id: 1, name: 'Millenium Falcon', speed: 1500}, 
  {id: 2, name: 'Starship Destroyer', speed: 1700},
  {id: 3, name: 'X-Wing', speed: 1200}
]);



  // Skapar state för nya inputfält (namn och hastighet)
  const [newName, setNewName] = useState("");
  const [newSpeed, setNewSpeed] = useState("");

function logSpeed(speed) {
  console.log(`Hastigheten är ${speed}`);
}

//Funktion för att lägga till ett nytt skepp
const handleAddShip = (e) => {
  e.preventDefault();
  const newShip = {
    id: Date.now(),
    name: newName,
    speed: parseInt(newSpeed),

  };
  setSpaceships([...ships, newShip]);
  setNewName('');
  setNewSpeed('');
};



return (
    <div>
      <h1>Spaceships</h1>
      {ships.map(ships => (
        <Ships
          key={ships.id}
          name={ships.name}
          speed={ships.speed}
          onLog={() => logSpeed(ships.speed)}
        />
      ))}

      <SpaceshipForm
        newName={newName}
        newSpeed={newSpeed}
        onNameChange={(e) => setNewName(e.target.value)}
        onSpeedChange={(e) => setNewSpeed(e.target.value)}
        onSubmit={handleAddShip }
        />

    </div>
  );
}

export default App;
