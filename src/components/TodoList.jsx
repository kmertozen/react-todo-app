import React from 'react'
import Todo from './Todo'
import { useSite } from "../context"

function TodoList() {
    
  const {todos,setTodos,filteredTodos} = useSite();
    return (


        <div className="todo-container">
            <ul className="w-50 p-0 rounded-bottom">
                {filteredTodos.map((todo)=>(
                    <Todo
                    text={todo.text}
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    />
                ))}
                {todos.length === 0 && (
				<li className='list-group-item text-center'>Henüz bir todo eklemediniz!</li>
			)}
                
            </ul>
        </div>


    )
}

export default TodoList