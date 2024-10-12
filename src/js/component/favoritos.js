import React, { useState } from "react";

const Favoritos = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    // Add a task
    const addTask = () => {
        if (inputValue.trim() === "") return;

        const newTodo = { label: inputValue, is_done: false };
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    // Delete a task
    const deleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    // Handle key down events for input
    const eventHandlerOnDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    // Handle input change
    const saveInput = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="my-5 container">
            <h1 className="text-center">FAVORITOS</h1>
            <input
                value={inputValue}
                onKeyDown={eventHandlerOnDown}
                onChange={saveInput}
                className="form-control form-control-lg"
                type="text"
                placeholder="Añade un favorito..."
                aria-label=".form-control-lg example"
            />
            <ul className="list-group mt-3">
                {todos.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        {item.label}
                        <button
                            type="button"
                            onClick={() => deleteTask(index)}
                            className="btn-close justify-end"
                            aria-label="Close"
                        ></button>
                    </li>
                ))}
              
            </ul>
        
        </div>
    );
};

export default Favoritos;
