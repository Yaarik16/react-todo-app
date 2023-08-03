import React, { useState } from "react";
import './home.css'
import TodoItem from "./item/TodoI_item.jsx";
import CreateTodoField from './create-todo-field/CreateTodoField'


const data = [
    {
        _id: 'sljj43',
        title: 'Finish the essay collaboration',
        isComplited: false
    },
    {
        _id: 'jldfg63',
        title: 'Reed next chapter of the book',
        isComplited: false
    }, {
        _id: 'sldfg23',
        title: 'Send the finished assigment',
        isComplited: false
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(todo => todo._id !== id))
    }


    return (
        <div className="wrapper">
            <div className="home_container">
                <h1>To do for Junior</h1>
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo} />
                ))}
                <CreateTodoField setTodos={setTodos} />
            </div>
        </div>
    )
}

export default Home;