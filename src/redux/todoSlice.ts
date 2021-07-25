import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ITask {
    id: string
    value: string
}

const slice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [] as ITask[]
    },
    reducers: {
        addTaskAction: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        },   
        removeTaskAction: (state, action: PayloadAction<ITask>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        syncTasksAction: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        }
    }
});

export const { addTaskAction: addTodoTaskAction, removeTaskAction, syncTasksAction } = slice.actions;

export default slice.reducer;