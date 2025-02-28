import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',
    async() => {
        const response = await axios.get('https://task-list-hw-server-student-neog-ca.replit.app/tasks')
        return response.data
    }
    )

export const taskSlice = createSlice(
    {
        name: 'tasks',
        initialState: {
            tasks: [],
            status: 'idle',
            error: null
        },
        reducers: {
            toggleTaskStatus: (state, action) => {
                const selectedTask = state.tasks.find(taskData => 
                    taskData.taskList.find(task => 
                        task.taskId === action.payload
                ))

                if(selectedTask){
                    const task = selectedTask.taskList.find(task => task.taskId === action.payload)
                    if(task){
                        task.status = task.status === 'Pending' ? 'Completed' : 'Pending'
                    }
                }
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchTasks.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(fetchTasks.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.tasks = action.payload
                })
                .addCase(fetchTasks.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.error.message
                })
        }
    }
)

export const {toggleTaskStatus} = taskSlice.actions

export default taskSlice.reducer