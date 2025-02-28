import { useDispatch, useSelector } from "react-redux"
import { toggleTaskStatus, fetchTasks } from "./taskSlice"
import { useEffect } from "react"

const Tasks = () => {
    const dispatch = useDispatch()
    const {tasks, status, error} = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    return (
        <div>
            <h1>My Task List</h1>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {tasks && 
                (
                   tasks.map(taskData => 
                  (
                    <section>
                        <h3>{taskData.date}</h3>
                        <ul>
                            {taskData.tasks.map(task => (
                                <li key={task.taskId}>
                                    <p>{task.task}
                                        <button onClick={() => dispatch(toggleTaskStatus(task.taskId))}>{task.taskStatus}</button>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                   )
                )
                )
            }
        </div>
    )
}

export default Tasks