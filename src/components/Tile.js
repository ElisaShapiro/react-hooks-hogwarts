import { useState } from 'react';
import HogPlus from "./HogPlus"

function Tile({ name, specialty, greased, weight, medal, image }) {

    const [tileClick, setTileClicked] = useState(false);

    function handleTileClick() {
        setTileClicked((tileClick) => !tileClick)
    };

    return (<div onClick={handleTileClick} className="pigTile">
        <h2>{name}</h2>
        <img src={image} alt="pig image" />
        {tileClick ? <HogPlus
            specialty={specialty}
            greased={greased}
            weight={weight}
            medal={medal}
        /> : null}

    </div>)
}



export default Tile;