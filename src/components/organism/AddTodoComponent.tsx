import { FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { Container, OkButton } from "./styled/styled"

export const AddTodoComponent = ({addTodos} : {addTodos : (title:string)=> void}) =>{
    const [todo, setTodo] = React.useState<string>("");
    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!todo) {
          alert("Entre com a terefa meu caro!");
        } else {
          addTodos(todo);
          setTodo("");
        }
      };
    return(
        <Container>

        <form>
        <TextField 
                    id="outlined-required" 
                    label="Tarefa"
                    variant="filled"
                    value={todo}
                    onChange={e => {setTodo(e.target.value)}}
                    />
       
                <OkButton 
                hoverBgColor="#222"
                bgColor="#444" onClick={submit}>+</OkButton>
        </form>
        </Container>
   
    )
}

