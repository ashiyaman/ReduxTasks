import { useSelector } from "react-redux"

const Tasks = () => {
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
                                <li key={task.id}>
                                    <p>{task.title}</p>
                                    <p>Status: {task.status}</p>
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