import { useState } from 'react';

function Tile({ nameHog, specialty, greased, weight, medal, image}){
    const [tileClick, setTileClicked] = useState(false)
    


    return (
        <>
        <div className="pigTile">
            <h2>{nameHog}</h2>
            <img src={image} alt="pig image" />
        </div>
        <div>
            <h2>{nameHog}</h2>
            <img src={image} alt="pig image" />
            <h3>{specialty}</h3>
            <p>{greased}</p>
            <p>{weight}</p>
            <p>{medal}</p>
        </div>
        </>
    )
}




export default Tile;