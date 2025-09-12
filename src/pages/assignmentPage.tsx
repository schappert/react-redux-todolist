import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store.ts";
import { User, selectSelectedUsers } from "../features/users-slice.ts";
import { addAssignment, selectAssignments } from "../features/assignments-slice.ts";
import UserSelector from "../components/user/user-selector.tsx";
import TodoSelector from "../components/todo/todo-selector.tsx";
import UserRecapTodo from "../components/user/user-recap-todo.tsx";

const AssignmentPage: React.FC = () => {
    // Utilise uniquement les utilisateurs sélectionnés dans le store
    const users = useSelector((state: RootState) => selectSelectedUsers(state));
    const todos = useSelector((state: RootState) => state.todos.todos);
    const assignments = useSelector(selectAssignments);
    const dispatch = useDispatch();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    const [activeTab, setActiveTab] = useState<"assign" | "recap">("assign");

    const handleAssignTasks = () => {
        if (!selectedUser || selectedTodos.length === 0) return;

        selectedTodos.forEach(todoId => {
            dispatch(addAssignment({ userId: selectedUser.id, todoId }));
        });

        setSelectedTodos([]);
        alert(`Tâches attribuées à ${selectedUser.name} avec succès !`);
    };

    const getTodosForUser = (userId: number) => {
        const todoIds = assignments
            .filter(a => a.userId === userId)
            .map(a => a.todoId);
        return todos.filter(t => todoIds.includes(t.id));
    };

    // Tri des utilisateurs pour le récap
    const sortedUsersForRecap = users
        .slice()
        .sort((a, b) => {
            const aTodos = getTodosForUser(a.id).length;
            const bTodos = getTodosForUser(b.id).length;
            if (aTodos > 0 && bTodos === 0) return -1;
            if (aTodos === 0 && bTodos > 0) return 1;
            if (aTodos === 0 && bTodos === 0) return a.name.localeCompare(b.name);
            return 0;
        });

    return (
        <div className="mt-20 p-6 max-w-4xl mx-auto bg-white shadow-md rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-indigo-700">Gestion des tâches</h2>

            {/* Onglets */}
            <div className="flex mb-6 border-b">
                <button
                    className={`py-2 px-4 font-semibold transition ${
                        activeTab === "assign"
                            ? "border-b-4 border-indigo-600 text-indigo-700"
                            : "text-gray-500 hover:text-indigo-600"
                    }`}
                    onClick={() => setActiveTab("assign")}
                >
                    Attribution
                </button>
                <button
                    className={`py-2 px-4 font-semibold transition ${
                        activeTab === "recap"
                            ? "border-b-4 border-indigo-600 text-indigo-700"
                            : "text-gray-500 hover:text-indigo-600"
                    }`}
                    onClick={() => setActiveTab("recap")}
                >
                    Récapitulatif
                </button>
            </div>

            {/* Onglet Attribution */}
            {activeTab === "assign" && (
                <>
                    <UserSelector
                        users={users}
                        selectedUser={selectedUser}
                        onSelectUser={setSelectedUser}
                    />
                    {selectedUser && (
                        <TodoSelector
                            todos={todos}
                            selectedTodos={selectedTodos}
                            onToggleTodo={(id) =>
                                selectedTodos.includes(id)
                                    ? setSelectedTodos(selectedTodos.filter(t => t !== id))
                                    : setSelectedTodos([...selectedTodos, id])
                            }
                            userName={selectedUser.name}
                        />
                    )}
                    <button
                        onClick={handleAssignTasks}
                        disabled={!selectedUser || selectedTodos.length === 0}
                        className={`w-full py-3 rounded-xl font-semibold text-white transition ${
                            selectedUser && selectedTodos.length > 0
                                ? "bg-indigo-600 hover:bg-indigo-700"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Attribuer les tâches
                    </button>
                </>
            )}

            {/* Onglet Récapitulatif */}
            {activeTab === "recap" && (
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Récapitulatif des attributions</h3>
                    <ul className="space-y-4">
                        {sortedUsersForRecap.map(user => (
                            <UserRecapTodo
                                key={user.id}
                                user={user}
                                todos={getTodosForUser(user.id)}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AssignmentPage;
