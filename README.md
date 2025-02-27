# ReduxTasks

ReduxTasks is a simple and efficient task management application built using Redux Toolkit. It helps you create, update, and manage tasks seamlessly while leveraging the power of Redux for state management.

## Installation

```sh
npm install reduxtasks
```

or

```sh
yarn add reduxtasks
```

## Usage

### Setting up Redux Store

```javascript
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
```

### Creating a Redux Slice for Tasks

```javascript
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => { state.push(action.payload); },
    removeTask: (state, action) => state.filter(task => task.id !== action.payload),
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
```

### Using ReduxTasks in a Component

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from './features/tasksSlice';
import { useState } from 'react';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="New task" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
            <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
```
