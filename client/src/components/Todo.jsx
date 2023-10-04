import React from 'react'
import Styles from "../styles/Todo.module.css"
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { reomveTodo } from '../features/todo/todoSlice'
export default function Todo() {
    const dispatch=useDispatch()
    const todos=useSelector(state=> state.todos)
    function deleteTodo(id){
        dispatch(reomveTodo(id))
    }
  return (
    <div className={Styles.container}>
      {todos.map((todo)=>{
        return <h2 key={todo.id} className={Styles.todo}><span className={Styles.content} >{todo.text}</span> <button className={Styles.deleteBtn} type="button" onClick={()=>deleteTodo(todo.id)}>delete</button></h2>
      })}
    </div>
  )
}
