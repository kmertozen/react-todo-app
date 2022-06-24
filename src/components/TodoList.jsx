import React from 'react'
import { useSite } from "../context"
function TodoList() {

    const { todos, setTodos, filteredTodos } = useSite();
    const deleteHandler = (id) => {
        setTodos(todos.filter((tds) => tds.id !== id))
    }
    const complateHandler = (id) => {

        setTodos(todos.map((todoitem) => {
            if (todoitem.id === id) {
                return {
                    ...todoitem, completed: !todoitem.completed
                }
            }
            return todoitem;
        }))

    }
    return (


        <div className="todo-container">
            <ul className="w-50 p-0 rounded-bottom">
                {filteredTodos.map((todo) => (
                    <li className={`todo ${todo.completed ? "completed" : ""} list-group-item d-flex  rounded-0`}>

                        <span className="todo-item mr-auto">{todo.text}</span>
                        <button className="btn btn-success mr-2" onClick={() => complateHandler(todo.id)}>
                            Tamamla
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteHandler(todo.id)}>
                            Kaldır
                        </button>

                    </li>
                ))}
                {filteredTodos.length === 0 &&(<li className='list-group-item text-center'>Todo Bulunamadı</li>)}

            </ul>
        </div>


    )
}

export default TodoList