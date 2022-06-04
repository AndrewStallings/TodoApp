import React, { useState } from 'react';
import Tasks from 'models/Tasks';
import SubTask from './SubTask';
import '../renderer/main.css';

interface TaskDisplayProps {
  item: Tasks;
}

const createSubTask = (task: string) => {
  return <SubTask task={task} />;
};

const TaskDisplay = ({ item }: TaskDisplayProps) => {
  //if subTask is undefined will just us an empty array.

  const [itemSubTasks, setSubItem] = useState<string[]>(
    item.subTask === undefined ? [] : item.subTask
  );
  const [newSubTask, setNewSubTask] = useState('');
  const [isComplete, updateIsComplete] = useState(false);

  if (!isComplete) {
    return (
      <div className="taskDisplay">
        <div>
          <span>{item.desc}</span>
          <button
            className="completebtn"
            onClick={() => updateIsComplete(!isComplete)}
          >
            ✔
          </button>
        </div>
        {
          <div className="subTaskList">
            {itemSubTasks.map((subTsk) => createSubTask(subTsk))}
          </div>
        }
        <div className="subTaskAdd">
          <input
            type="text"
            placeholder="new subask"
            value={newSubTask}
            onChange={(e) => setNewSubTask(e.target.value)}
          />
          <button
            className="addBtn"
            onClick={() => {
              setSubItem((itemSubTasks) => [...itemSubTasks, newSubTask]),
                setNewSubTask('');
            }}
          >
            ➕
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default TaskDisplay;
