import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  function addTodo(e) {
    e.preventDefault();
    if (!title) return;
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then(newTodo => {
        setTodos(prev => [...prev, newTodo]);
        setTitle('');
      })
      .catch(console.error);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Todos</h1>
      <form onSubmit={addTodo}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.title} {t.completed ? '(done)' : ''}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
