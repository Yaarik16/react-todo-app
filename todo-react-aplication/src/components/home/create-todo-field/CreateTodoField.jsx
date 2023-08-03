import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {

    const [title, setTitle] = useState('')


    const addTodo = (title) => {
        if (title === '') {
            alert('You can\'t submit empty field')
        } else {
            setTodos(prev => [{
                _id: Math.random(),
                title,
                isComplited: false
            }, ...prev
            ])
            setTitle('')
        }
    }



    return (
        <div className="form">
            <input className="input" placeholder="Add a task" type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyUpCapture={e => e.key === 'Enter' && addTodo(title) ? title === '' & alert('df') : ''} />
        </div>
    )
}

export default CreateTodoField;