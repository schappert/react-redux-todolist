import React from "react";
import { Todo } from "../../features/todos-slice.ts";

interface Props {
    todos: Todo[];
    selectedTodos: number[];
    onToggleTodo: (id: number) => void;
    userName: string;
}

const TodoSelector: React.FC<Props> = ({ todos, selectedTodos, onToggleTodo, userName }) => (
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Tâches à attribuer pour {userName}
        </h3>
        <ul className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => onToggleTodo(todo.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition ${
                        selectedTodos.includes(todo.id)
                            ? "bg-indigo-600 text-white border-indigo-700"
                            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                    }`}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    </div>
);

export default TodoSelector;
