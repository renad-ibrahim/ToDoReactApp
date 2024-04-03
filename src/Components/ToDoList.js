import React, { useEffect, useState } from 'react'
import '../App.css';
import { Container, Typography } from '@mui/material';
import EnterTask from './EnterTask';
import ToDos from './ToDos';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToDoList() {
    let getLocalStorage = () => {
        let todos = localStorage.getItem("todos");
        if (todos) {
            return (todos = JSON.parse(localStorage.getItem("todos")))
        } else {
            return [];
        }
    }

    let [todos, setTodos] = useState(getLocalStorage());

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Container sx={{ textAlign: "center", width: "600px" }}>
            <ToastContainer style={{ width: "300px", fontSize: "16px", color: "purple" }} />
            <Typography sx={{ textAlign: "center", margin: "30px", fontFamily: "Rubik Scribble" }} variant='h2' >To Do List</Typography>
            <EnterTask todosChange={setTodos} todoArray={todos} />
            <ToDos todos={todos} todosChange={setTodos} />
        </Container>
    )
}

export default ToDoList;