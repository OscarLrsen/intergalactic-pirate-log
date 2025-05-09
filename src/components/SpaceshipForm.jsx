import React from "react"; // Importerar React


function SpaceshipForm({
    newName,
    newSpeed,
    onNameChange,
    onSpeedChange,
    onSubmit

}){
    return (
        <form onSubmit={onSubmit}>
            {/* Formulär för att lägga till ett nytt rymdskepp */}

            <input
                type="text"
                placeholder="Namn på rymdskepp"
                value={newName}
                onChange={onNameChange}
                required
            />

            {/* Inputfält för hastighet */}
            <input 
                type="number"
                placeholder="Hastighet"
                value={newSpeed}
                onChange={onSpeedChange}
                required
                />


                <button type="submit">Lägg till.</button>
        </form>
    );

}

export default SpaceshipForm; // Exporterar komponenten för användning i andra filer