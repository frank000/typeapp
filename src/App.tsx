import React from 'react';

import './App.css';
import { type } from 'os';
import { AddTodoComponent } from "./components/organism/AddTodoComponent"
import { TodosComponent } from './components/organism/TodosComponents';
import { Container } from './components/organism/styled/styled';

function App() {
  const [todos, setTodos] = React.useState<ITodos>({todos: []});
  
type ITodo = {
  id:number;
  title:string;
  completed:boolean;
}

type ITodos = {
  todos: ITodo[];
}
const toggleTodos = (id: number) => {
  setTodos({
    todos: todos.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  });
}
const deleteTodos = (id: number) => {
  setTodos({
    todos: todos.todos.filter(t => t.id !== id)
  });
};
const addTodos = (title:string) => {
  setTodos({
    todos:[
      {title, completed: false, id: todos.todos.length+1},
      ...todos.todos
    ]
  })

}

  return (
    <Container  >
      <h1>Gerenciador de Tarefas Rápidas</h1>
        <AddTodoComponent addTodos={addTodos} ></AddTodoComponent>
        <TodosComponent todos={todos} toggleTodos={toggleTodos} deleteTodos={deleteTodos}></TodosComponent>
    </Container>
  );
}

export default App;
