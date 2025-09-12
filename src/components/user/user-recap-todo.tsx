import React from "react";
import { Todo } from "../../features/todos-slice.ts";
import { User } from "../../features/users-slice.ts";

interface Props {
    user: User;
    todos: Todo[];
}

const UserRecapTodo: React.FC<Props> = ({ user, todos }) => (
    <li className="p-4 border rounded-lg bg-gray-50">
        <p className="font-medium text-indigo-700">{user.name}</p>
        {todos.length > 0 ? (
            <ul className="list-disc ml-6 mt-2 text-gray-700">
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        ) : (
            <p className="text-sm text-gray-500 mt-1">Aucune tâche attribuée</p>
        )}
    </li>
);

export default UserRecapTodo;
