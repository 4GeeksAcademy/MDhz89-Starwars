import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardPersonajes from "../component/CardPersonaje"

const Characters = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <div>
            <h1>Characters</h1>
            <div className="card-group">
            <div className="d-flex flex-row overflow-scroll" style={{}}>
                {store.people.map((people,index) =>
                    <CardPersonajes
                        key={index}
                        id={index+1}
                        name={people.name}
                        eye_color={people.eye_color}
                        hair_color={people.hair_color}
                        gender={people.gender}
                        

                    />)}
            </div>  
            </div>
        </div>
    )

}
export default Characters