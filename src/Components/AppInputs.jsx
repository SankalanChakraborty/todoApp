import React, {useState} from 'react';
import './AppInputs.css';
import { useReducer } from 'react';
import TodoCard from './TodoCard';

const reducer = (todos, action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...todos, newTodo(action.payload.name, action.payload.description)]
        case "TODO_TOGGLE":
            return todos.map(item=>{
                if(item.id === action.payload.id){
                    return {...item, complete: !item.complete}
                }
                return item
            })
        case "TODO_DELETE":
            return todos.filter(item=> item.id !== action.payload.id)
        default:
            console.log("Invalid Case")
    }
}

const newTodo = (todoName, todoDescription)=>{
    return {id: Date.now(), name: todoName, description: todoDescription, complete: false}
}

const AppInputs = ({nightMode}) => {
    const [todoName, setTodoName] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);

    const addTodo = ()=>{
        if(todoName && desc){
            dispatch({type:"ADD_TODO", payload: {name: todoName, description: desc} });
            setTodoName("");
            setDesc("");
        }
    }

  return (
    <>
        <div className="todo-app_actions">
            <input type="text" value={todoName} onChange={e=>setTodoName(e.target.value)} placeholder="Enter Title"/>
            <input type="text" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Enter Description"/>
            <button className="btn-add" onClick={addTodo}>Add</button>
        </div>
        <div className="todo-cards_section">
            {todos.map(item=>{
                return <TodoCard key={item.id} id={item.id} title={item.name} description={item.description} complete={item.complete} dispatch={dispatch} nightMode={nightMode}/>
            })}
        </div>
    </>
  )
}

export default AppInputs;
