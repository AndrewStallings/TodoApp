import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PrimaryButton from 'Components/PrimaryButton';
import TaskDisplay from 'Components/TaskDisplay';
import Tasks from 'models/Tasks';
import './main.css';
import './App.css';

const createTaskDisplay = (item: Tasks) => {
  return <TaskDisplay item={item} />;
};

const Hello = () => {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [newTask, setNewTask] = useState<Tasks>();

  const updateTaskList = (item: Tasks | undefined) => {
    if (item === undefined) {
      return;
    }
    const arr = [...taskList];
    arr.push(item);
    setTaskList(arr);
    setNewTask({ desc: '', subTask: undefined });
  };
  return (
    <div className="parentBody">
      <div>{taskList.map((task) => createTaskDisplay(task))}</div>
      <div className="taskAdd">
        <input
          className="taskInput"
          value={newTask?.desc}
          placeholder="Add a new Task"
          onChange={(e) => {
            setNewTask({ desc: e.target.value, subTask: newTask?.subTask });
          }}
        ></input>
        <PrimaryButton
          text="Add Task"
          clickAction={() => {
            updateTaskList(newTask);
          }}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
