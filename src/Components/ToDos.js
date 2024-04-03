import React from 'react'
import { Button, Checkbox, Container, Grid, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { purple, pink, grey } from '@mui/material/colors';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToDos(props) {
    let handelCompelete = (index) => {
        let newTodos = [...props.todos];
        newTodos[index].compeleted = !newTodos[index].compeleted;
        props.todosChange(newTodos);
    }

    let handelDelete = (index) => {
        let newTodos = [...props.todos];
        newTodos.splice(index, 1);
        props.todosChange(newTodos);
        toast("👽 Task deleted! Your to-do list just got lighter in this cosmic journey. 🌠", { position: "bottom-right" })
    }

    let handleClearAll = () => {
        props.todosChange([]);
        toast("🚀 Whoosh! All tasks cleared, creating space for new cosmic adventures!", { position: "bottom-right" })
    };

    return (
        <>
            <Container sx={{ width: "600px", padding: "0px" }}>
                {props.todos.map(
                    ({ compeleted, text }, index) =>
                        <Grid container key={index} alignItems='center'>
                            <Grid alignItems='center' item xs={8} md={8}
                                className={compeleted ? "done" : ""}
                                sx={{ display: "flex", cursor: "pointer", textAlign: "left" }}
                                onClick={() => handelCompelete(index)}>
                                <RocketLaunchOutlinedIcon sx={{
                                    color: grey[500],
                                    '&.Mui-checked': {
                                        color: grey[400],
                                    }
                                }} />
                                <Typography sx={{ marginLeft: "5px", fontSize: "20px" }}>{text}</Typography>
                            </Grid>
                            <Grid alignItems='center' justifyContent='center' item xs={4} md={4} sx={{ display: "flex", cursor: "pointer", textAlign: "right" }}>
                                <Checkbox
                                    onClick={() => handelCompelete(index)}
                                    {...props.todos}
                                    checked={compeleted}
                                    sx={{
                                        color: pink[900],
                                        '&.Mui-checked': {
                                            color: pink[900],
                                        },
                                    }}
                                />
                                <BackspaceIcon
                                    sx={{
                                        color: purple[800],
                                        '&.Mui-checked': {
                                            color: purple[600],
                                        },
                                    }}
                                    onClick={() => handelDelete(index)} />
                            </Grid>
                        </Grid>
                )}
            </Container>
            {props.todos.length > 0 && (
                <Button
                    sx={{
                        backgroundColor: purple[800],
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: purple[600],
                        }
                    }}
                    variant='contained'
                    onClick={() => handleClearAll()}
                >
                    Clear all tasks
                </Button>
            )}
        </>
    )
}

export default ToDos