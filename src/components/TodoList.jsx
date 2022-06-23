import React from 'react'
import Todo from './Todo'
function TodoList({todos,setTodos,filteredTodos}) {
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
                
                
            </ul>
        </div>


    )
}

export default TodoList