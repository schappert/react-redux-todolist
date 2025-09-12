import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos-slice";
import usersReducer from "./features/users-slice.ts";
import assignmentsReducer from "./features/assignments-slice.ts";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        users: usersReducer,
        assignments: assignmentsReducer,
    },
});

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
