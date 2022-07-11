import { Container, ToggleBtn } from "./styled/styled";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from "@mui/material";

type ITodo = {
    id:number;
    title:string;
    completed:boolean;
  }
  
  type ITodos = {
    todos: ITodo[];
  }
  
  type ITodosProps = {
    todos: ITodos;
    toggleTodos: (id: number) => void;
    deleteTodos: (id: number) => void
  }

  export const TodosComponent: React.FC<ITodosProps> = ({todos, toggleTodos, deleteTodos}) => {
    const deleteTodo = (id: number) => {
      if (window.confirm(`Deseja de fato deletar a tarefa?`)) {
        deleteTodos(id);
      }
    }
    return (
      <div className="section__todos">
      <h2>Tarefas simples</h2>
      {todos.todos.length ? <ul className="todos">
        {todos.todos.map(todo => (
          <li key={todo.id}>
    
            <FormControlLabel 
             onChange={() => toggleTodos(todo.id)}
                control={
                <Checkbox checked={todo.completed} 
                  />
              } 
              style={{textDecoration: todo.completed? 'line-through': 'none'}}
            label={todo.title} />

            <ToggleBtn onClick={() => {deleteTodo(todo.id)}}>
              <DeleteOutlineIcon/>
            </ToggleBtn>
          </li>
        ))}
      </ul>: <div>Nenhuma terefa criada</div>}
    </div>
    );
  };