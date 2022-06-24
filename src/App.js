import './App.css';
import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Provider from "./context"
function App() {


  return (
    <Provider>
      <Form />
      <TodoList />
    </Provider>
  );
}

export default App;
