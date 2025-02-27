import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice(
    {
        name: 'tasks',
        initialState: {
            tasks: [
                {
                    date: '15/07/2024',
                    taskList: [
                        {
                            taskId: 'T001',
                            title: 'Get Groceries from the market.',
                            status: 'Pending'
                        },
                        {
                            taskId: 'T002',
                            title: 'Get to gym.',
                            status: 'Completed'
                        },
                        {
                            taskId: 'T003',
                            title: 'Water the plants.',
                            status: 'Completed'
                        },
                    ]
                },
                {
                    date: '16/07/2024',
                    taskList: [
                        {                            
                            taskId: 'T004',
                            title: 'Go to the park.',
                            status: 'Completed'                            
                        },
                        {
                            taskId: 'T005',
                            title: 'Get my room cleaned.',
                            status: 'Pending'
                        }
                    ]
                }
            ]
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
        }
    }
)

export const {toggleTaskStatus} = taskSlice.actions

export default taskSlice.reducer