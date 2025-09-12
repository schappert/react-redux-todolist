import React from "react";
import './App.css'
import Navbar from "./components/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import TodoPage from "./pages/todo-page.tsx";
import UserPage from "./pages/user-page.tsx";
import AssignmentPage from "./pages/assignmentPage.tsx";

const App: React.FC = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/tasks" element={<TodoPage />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/assignment" element={<AssignmentPage />} />
            </Routes>
        </>
    );
};

export default App;
