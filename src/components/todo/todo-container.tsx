import React from "react";

interface TodoContainerProps {
    children: React.ReactNode;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Ma TodoList
                </h1>
                {children}
            </div>
        </div>
    );
};

export default TodoContainer;
