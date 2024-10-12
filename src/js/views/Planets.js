import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardPlaneta from "../component/CardPlanetas";


const Planets = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPlanets()
    }, [])

    return (
        <div>
            <h1>Planets</h1>
            <div className="card-group">
            <div className="d-flex flex-row overflow-scroll" style={{}}>
                {store.planets.map((item,index) =>
                    <CardPlaneta
                        key={index}
                        id={index}
                        name={item.name}
                        population={item.population}
                        terrain={item.terrain}
                        climate={item.climate}

                    
                    />)}
            </div>  
            </div>
        </div>
    )

}
export default Planets