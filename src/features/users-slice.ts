import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface UsersState {
    data: User[] | null;
    selectedUsers: User[]; // <- nouvel état
    loading: boolean;
    error: boolean;
}

const initialState: UsersState = {
    data: null,
    selectedUsers: [],
    loading: false,
    error: false,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<User[]>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        },
        addLoader: (state) => {
            state.loading = true;
            state.error = false;
        },
        addError: (state) => {
            state.error = true;
            state.loading = false;
        },
        toggleSelectedUser: (state, action: PayloadAction<User>) => {
            const exists = state.selectedUsers.find(u => u.id === action.payload.id);
            if (exists) {
                state.selectedUsers = state.selectedUsers.filter(u => u.id !== action.payload.id);
            } else {
                state.selectedUsers.push(action.payload);
            }
        },
        clearSelectedUsers: (state) => {
            state.selectedUsers = [];
        },
    },
});

export const getData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(addLoader());
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await response.json();
        dispatch(addData(data));
    } catch (error) {
        dispatch(addError());
    }
};

export const { addData, addLoader, addError, toggleSelectedUser, clearSelectedUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.data;
export const selectSelectedUsers = (state: RootState) => state.users.selectedUsers;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;

export default usersSlice.reducer;
