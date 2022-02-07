import React from "react";
import {TodoListItem} from "./TodoListItem";
import PropTypes from 'prop-types';

export const TodoList = ({todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) => (
                    <TodoListItem todo={todo} key={todo.id} index={index} handleToggle={handleToggle} handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}

TodoList.prototype = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}