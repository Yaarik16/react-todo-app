import React from "react";
import './home.css'
import TodoItem from "./item/TodoI_item.jsx";


const todos = [
    {
        _id:'sljj43',
        title: 'Finish the essay collaboration',
        isComplited: false
    },
    {
        _id:'jldfg63',
        title: 'Reed next chapter of the book',
        isComplited: false
    }, {
        _id:'sldfg23',
        title: 'Send the finished assigment',
        isComplited: false
    },
]

const Home = () => {
    return (
        <div className="wrapper">
            <div className="home_container">
                <h1>To do for Junior</h1>
                {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo}/>
                ))}
            </div>
        </div>
    )
}

export default Home;