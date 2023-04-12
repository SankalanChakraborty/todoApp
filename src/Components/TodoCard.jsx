import React from 'react';
import './TodoCard.css';

const TodoCard = ({id, title, description, complete, dispatch, nightMode}) => {
  const card_container_theme = {
    backgroundColor: nightMode ? "#242323" : "#f6c192",
    border: nightMode ? "1px solid white" : ""
  }

  return (
    <div className="todo-card_container" style={card_container_theme}>
        <div className="todo-info">
            <h2 style={{textDecoration: complete ? "line-through": "", color: nightMode ? "#FFF" : "#000"}}>{title}</h2>
            <p style={{color: nightMode ? "#d4cdcd" : "#000"}}>{description}</p>
        </div>
        <div className="todo-action_buttons">
        <span><i className="fa-solid fa-check-double" onClick={()=>dispatch({type: "TODO_TOGGLE", payload: {id: id}})}/></span>
            <span><i className="fa-solid fa-circle-xmark" onClick={()=>dispatch({type: "TODO_DELETE", payload: {id: id}})}/></span>
        </div>
    </div>
  )
}

export default TodoCard;
