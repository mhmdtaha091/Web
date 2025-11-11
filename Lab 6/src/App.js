import React from 'react';
import HelloWorld from './components/HelloWorld';
import ClickCounter from './components/ClickCounter';
import ItemList from './components/ItemList';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lab 07 </h1>
        <p className="app-subtitle">Interactive React fundamentals</p>
      </header>

      <section className="task-card">
        <h2>Task 1: Hello World</h2>
        <HelloWorld />
      </section>

      <section className="task-card">
        <h2>Task 2: Click Counter</h2>
        <ClickCounter />
      </section>

      <section className="task-card">
        <h2>Task 3: Item List</h2>
        <ItemList />
      </section>

      <section className="task-card">
        <h2>Task 4: Controlled Form</h2>
        <UserForm />
      </section>
    </div>
  );
}

export default App;
