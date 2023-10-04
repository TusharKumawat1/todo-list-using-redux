import React, { useState } from 'react'
import Styles from "../styles/AddTodo.module.css"
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
export default function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault();
        if (input) {
            dispatch(addTodo(input))
        }
        setInput("")
    }
    return (
        <form className={Styles.inputForm} onSubmit={addTodoHandler}>
            <input className={Styles.inputField}type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add something....'/>
            <button className={Styles.addBtn} type='submit'>Add</button>
        </form>
    )
}
