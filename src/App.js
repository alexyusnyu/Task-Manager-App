import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Task Manager App</h1>
      </header>
      <TaskList />
    </div>
  );
}

export default App;
