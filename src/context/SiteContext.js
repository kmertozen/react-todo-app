// ./context/SiteContext.js
import React, { createContext, useState, useContext,useEffect } from "react"

const SiteContext = createContext()
const SiteProvider = ({ children }) => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("hepsi");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [todoSearch, setTodoSearch] = useState("");

    const data = {
        inputText,
        setInputText,
        todos,
        setTodos,
        filter,
        setFilter,
        todoSearch,
        setTodoSearch,
        filteredTodos
    }

    useEffect(() => {
        getLStorage();
    
      }, [])
    
      useEffect(() => {
    
        setFilteredTodos(todos.filter((todo) => {
          const indexOf = todo.text.toLocaleLowerCase('TR').indexOf(todoSearch.toLocaleLowerCase('TR'))
          return indexOf !== -1
        }))
      }, [todos, todoSearch])
    
    
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
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}

export const useSite = () => useContext(SiteContext)
export default SiteProvider