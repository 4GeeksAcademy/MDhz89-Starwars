import React, { useState } from "react";
import { Link } from "react-router-dom";
import Favoritos from "./favoritos";

const CardStarShips = ({ id, name, created, passengers, MGLT }) => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (inputValue.trim() === "") return;

        const newTodo = { label: inputValue, is_done: false };
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const deleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const saveInput = (e) => {
        setInputValue(e.target.value);
    };

    const eventHandlerOnDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
                className="card-img-top" 
                alt={name} 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://imgs.search.brave.com/I3ESIKs9ohkpFsKq7d1u-9o9cQ2n_hbo8ZdQPtnooU4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzE5ZTY5/Yy9yb3lhbC1uYWJv/by1zdGFyc2hpcC80/NTBfMTAwMC5qcGc'; }} 
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> created: {created}                </p>
                <p className="card-text">passengers: {passengers }</p>
                <p className="card-text">MGLT: {MGLT }</p>
                
                <Link to={`/detail/starships/${id}`}>
                    <button type="button" className="btn btn-primary">more info</button>
                </Link>
                <button onClick={() => Favoritos(name)} type="button" className="btn btn-warning float-end">
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    );
};

export default CardStarShips;
