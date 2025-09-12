import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

export interface Assignment {
    userId: number;
    todoId: number;
}

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            // éviter les doublons
            const exists = state.assignments.find(
                a => a.userId === action.payload.userId && a.todoId === action.payload.todoId
            );
            if (!exists) state.assignments.push(action.payload);
        },
        removeAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments = state.assignments.filter(
                a => !(a.userId === action.payload.userId && a.todoId === action.payload.todoId)
            );
        },
        clearAssignments: (state) => {
            state.assignments = [];
        },
    },
});

export const { addAssignment, removeAssignment, clearAssignments } = assignmentsSlice.actions;

// Sélecteurs pratiques
export const selectAssignments = (state: RootState) => state.assignments.assignments;
export const selectTasksForUser = (userId: number) => (state: RootState) =>
    state.assignments.assignments
        .filter(a => a.userId === userId)
        .map(a => a.todoId);

export const selectUsersForTask = (todoId: number) => (state: RootState) =>
    state.assignments.assignments
        .filter(a => a.todoId === todoId)
        .map(a => a.userId);

export default assignmentsSlice.reducer;
