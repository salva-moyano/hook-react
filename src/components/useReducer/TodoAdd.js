import React from "react";
import {useForm} from "../../hooks/useForm";

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1 ) {
            return;
        }
        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });
        reset();
    }

    return (
        <>
            <h4>Add Task</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input type="text"
                       name="description"
                       className="form-control"
                       placeholder="Aprender ..."
                       autoComplete="off"
                       value={description}
                       onChange={handleInputChange}/>

                <div className="d-grid gap-2 mt-1">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </>
    )
}