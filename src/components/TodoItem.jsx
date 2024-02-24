function TodoItem({todo, setTodos}) {
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => id !== todo.id))
  }

  return (
      <li key={todo.id}>
        <p>{todo.title}</p>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </li>
      )

}

export default TodoItem