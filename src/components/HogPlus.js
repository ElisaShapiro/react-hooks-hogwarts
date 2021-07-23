

function HogPlus({ specialty, greased, weight, medal }) {

    return (<div className="pigTile">

        <h3>{specialty}</h3>
        <p>{greased}</p>
        <p>{weight}</p>
        <p>{medal}</p>
    </div>)
}

export default HogPlus;
