import React from "react";
import Check from "./Check";
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'
import './../home.css'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (

        <div>
            <button  className={cn('item', {
                'item_comp':todo.isComplited,
            })}>
                <button onClick={() => changeTodo(todo._id)} className="task_wrapper">
                    <Check isComplited={todo.isComplited} />
                    <span className={cn('text', {
                        'cross': todo.isComplited,
                    })}>{todo.title}</span>
                </button>
                <button className="del" onClick={() => removeTodo(todo._id)}>
                    <BsTrash className={'delete'} />
                </button>
            </button>
        </div>
    )
}

export default TodoItem;