import React from "react"; // Importerar React

function Ships (props, logSpeed) {
  return (
    <div
    onClick={props.onClick}
    style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}
    >


      <h1>{props.name}</h1>
      <p>Speed: {props.speed}</p>
      <button 
      onClick={(e) => {
        e.stopPropagation(); // Stoppar eventet från att bubbla upp till div'en
        props.onLog();

      }}
      >
        Logga hastigheten
      
      </button>
    </div>

    
  );
}


export default Ships;