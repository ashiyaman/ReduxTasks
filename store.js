import { configureStore } from "@reduxjs/toolkit"
import { taskSlice } from "./src/features/tasks/taskSlice"

export default configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})