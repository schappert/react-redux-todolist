import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
