import {useState} from 'react';
import Ships from './spaceships';
function App() {
const [ships]= useState ([
  {name: 'Millenium Falcon', speed: 1500}, 
  {name: 'Starship Destroyer', speed: 1700},
  {name: 'X-Wing', speed: 1200}
]);

return (
    <div>
      <h1>Spaceships</h1>
      {ships.map(ships => (
        <Ships
          key={ships.name}
          name={ships.name}
          speed={ships.speed}
        />
      ))}

    </div>
  );
}

export default App;
