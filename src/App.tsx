import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            onChange={handleChange}
            name="task"
            type="text"
            placeholder="Task..."
          />
          <input
            onChange={handleChange}
            name="deadline"
            type="number"
            placeholder="Deadline (in Days)."
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
