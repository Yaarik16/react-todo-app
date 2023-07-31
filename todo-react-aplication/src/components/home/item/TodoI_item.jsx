import React from "react";
import Check from "./Check";

const TodoItem = ({todo}) => {
    return (
       <button className="item">
        <Check />
        {todo.title}
        </button>
    )
}
  
export default TodoItem;