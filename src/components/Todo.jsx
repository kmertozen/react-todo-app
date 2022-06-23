import React from 'react'
import { Button } from 'react-bootstrap'

function Todo({text,todos,setTodos,todo}) {
    const deleteHandler=()=>{
        setTodos(todos.filter((tds)=>tds.id!==todo.id))
    }
    const complateHandler=()=>{

        setTodos(todos.map((todoitem)=>{
            if(todoitem.id===todo.id){
            return{
                ...todoitem,completed:!todoitem.completed
            }}
            return todoitem;
        }))

    }
    return (

        <li className={`todo ${todo.completed? "completed":""} list-group-item d-flex  rounded-0`}>
            
            <span className="todo-item mr-auto">{text}</span>
            <Button variant="success mr-2" onClick={complateHandler}>
                Tamamla
            </Button>
            <Button variant="danger" onClick={deleteHandler}>
                Kaldır
            </Button>
            
        </li>

    )
}

export default Todo