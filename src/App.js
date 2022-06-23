import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("hepsi");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoSearch, setTodoSearch] = useState("");

  useEffect(() => {
    getLStorage();

  }, [])
 
useEffect(()=>{

setFilteredTodos(todos.filter((todo) => {
  const indexOf = todo.text
    .toLocaleLowerCase('TR')
    .indexOf(todoSearch.toLocaleLowerCase('TR'))
  return indexOf !== -1
}))
},[todos,todoSearch])
 

  useEffect(() => {
    const filterHandler = () => {
      switch (filter) {
        case "tamamlandi":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case "tamamlanmadi":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler(filter);
    const saveLStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    saveLStorage();
  }, [todos, filter])

  const getLStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
     
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
      
    }
  }
  return (
    <div className="App">
      
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        todoSearch={todoSearch}
        setTodoSearch={setTodoSearch}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />




    </div>
  );
}

export default App;
