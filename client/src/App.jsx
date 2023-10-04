import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

export default function App() {
  return (
    <div className="container">
      <h1>Todo List 🎯</h1>
      <AddTodo/>
      <Todo/>
    </div>
  )
}
