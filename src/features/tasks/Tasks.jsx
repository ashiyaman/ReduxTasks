import { useDispatch, useSelector } from "react-redux"
import { toggleTaskStatus } from "./taskSlice"

const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks).tasks

    return (
        <div>
            <h1>My Task List</h1>
            {tasks && 
                (
                   tasks.map(taskData => (
                    <section>
                        <h3>{taskData.date}</h3>
                        <ul>
                            {taskData.taskList.map(task => (
                                <li key={task.taskId}>
                                    <p>{task.title}
                                        <button onClick={() => dispatch(toggleTaskStatus(task.taskId))}>{task.status}</button>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                   ))
                )
            }
        </div>
    )
}

export default Tasks