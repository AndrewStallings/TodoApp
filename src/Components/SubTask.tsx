import React, { useState } from 'react';
import '../renderer/main.css';
interface SubTaskProp {
  task: string;
}

const SubTask = ({ task }: SubTaskProp) => {
  const [isDone, updateIsDone] = useState(false);
  return !isDone ? (
    <div className="subTaskItems">
      <span>• {task}</span>
      <button className="completebtn" onClick={() => updateIsDone(!isDone)}>
        ✔
      </button>
    </div>
  ) : null;
};

export default SubTask;
