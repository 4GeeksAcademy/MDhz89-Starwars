import React from "react";


const CardPlaneta = ({ id, name, population, climate,terrain}) => {
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            {id==1?
        <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={name}/>    
        :
        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt={name} />
        }
           
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">population: {population}                </p>
                <p className="card-text">climate: {climate }</p>
                <p className="card-text">terrain: {terrain }</p>
                <button type="button" className="btn btn-primary">more info</button>
                <button type="button" className="btn btn-warning float-end"><i className="fa fa-heart"></i></button>

            </div>
        </div>
    );
};

export default CardPlaneta