import { Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function EnterTask(props) {

    let [inputValue, setInputValue] = useState('');

    let handleAddToDo = () => {
        let text = inputValue;
        let newText = { compeleted: false, text }
        if (inputValue == "") {
            toast("👽 You must add a task !!", { position: "bottom-right" })
        } else {
            props.todosChange([...props.todoArray, newText]);
            toast("🛸 Task successfully added to your cosmic to-do list!", {
                position: "bottom-right",
            })
        }
        setInputValue("");
    }
    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ display: "flex", marginBottom: "50px" }}>
                <Grid item xs={8} sx={{ display: "flex" }}>
                    <TextField value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        id="standard-basic" label="What you wanna do" variant="standard"
                        sx={{
                            width: "100%",
                            '& .MuiInputLabel-root': {
                                color: 'white'
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                                '&::placeholder': {
                                    color: 'white'
                                }
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}

                    />
                </Grid>
                <Grid item xs={2}>
                    <IconButton sx={{ paddingBottom: "0px", marginBottom: "-10px", color: "white" }} aria-label="add to shopping cart" onClick={() => { handleAddToDo() }} >
                        <AddTaskIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

export default EnterTask