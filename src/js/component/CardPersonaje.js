import React from "react";
import { Link } from "react-router-dom";

 const CardPersonaje = ({id,name,eye_color,hair_color,gender}) => {
	return (
		<div className="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
 
  <div className="card-body"> <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id) + ".jpg"} className="card-img-top" alt={name}/>
    <h5 className="card-title">{name}</h5>
    <p className="card-text">gender: {gender}</p>
    <p className="card-text">hair_color: {hair_color}</p>
    <p className="card-text">eye_color: {eye_color}</p>
    <Link to={`/detail/people/${id-1}`}>
        <button type="button" className="btn btn-primary">more info</button>
    </Link>
    <button type="button" className="btn btn-warning float-end"><i className="fa fa-heart"></i></button>

  </div>
</div>
	);
};

export default CardPersonaje