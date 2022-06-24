import React,{useState} from "react";
import { useSite } from "../context"

function Form() {

    const { inputText, setInputText, todos, setTodos, filter, setFilter, todoSearch, setTodoSearch } = useSite()

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandle = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
            setInputText("");
        }


    }

    const filterHandler = (e) => {
        e.preventDefault();
        setFilter(e.target.value);

    }
    const searchHandler = (e) => {
        setTodoSearch(e.target.value);

    }
    const [isActive, setActive] = useState(true);
    const toggleActive = (e) => {
        e.preventDefault();
        setActive(!isActive);
      };

    return (
        <form className="w-50 mx-auto bg-white pt-4 position-relative">
            <header>
                <h1 className="text-dark my-2">To Do List</h1>
            </header>

            <div className="w-75 d-flex">
                <input type="text" className="bg-light rounded w-100 px-4" placeholder="Yeni Görev Ekle" onChange={inputTextHandler} value={inputText} />
                <button type="submit" onClick={submitHandle}>
                    Ekle
                </button>
            </div>
            <div className="search " >
            <input type="text" className={`${isActive ? 'display': ""} border`} placeholder="Ara" value={todoSearch} onChange={searchHandler} />
            <button className={!isActive ? 'display': null} onClick={toggleActive}>ara</button>
            </div>

            <div className="filters">

                <button value="hepsi" className={`${filter === "hepsi" ? "selected" : ""} rounded `} onClick={filterHandler}>Hepsi</button>
                <button value="tamamlandi" className={`${filter === "tamamlandi" ? "selected" : ""} rounded`} onClick={filterHandler}>Tamamlanan</button>
                <button value="tamamlanmadi" className={`${filter === "tamamlanmadi" ? "selected" : ""} rounded`} onClick={filterHandler}>Tamamlanmayan</button>

            </div>
            
        </form>
    )
}

export default Form