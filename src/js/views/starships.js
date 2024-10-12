import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import CardStarShips from "../component/CardStarShips";

const Starships = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        actions.getStarShips();
    }, []);

    const addFavorite = (name) => {
        if (!favorites.includes(name)) {
            setFavorites([...favorites, name]);
        }
    };

    return (
        <div>
            <h1>Starships</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.starships.map((item, index) => (
                        <CardStarShips
                            key={index}
                            id={index}
                            name={item.name}
                            created={item.created}
                            passengers={item.passengers}
                            MGLT={item.MGLT}
                            onFavorite={addFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Starships;
