import React from "react";
import { User } from "../../features/users-slice.ts";

interface Props {
    users: User[];
    selectedUser: User | null;
    onSelectUser: (user: User) => void;
}

const UserSelector: React.FC<Props> = ({ users, selectedUser, onSelectUser }) => (
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Sélectionnez un utilisateur</h3>
        <ul className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
            {users.map(user => (
                <li
                    key={user.id}
                    onClick={() => onSelectUser(user)}
                    className={`p-3 rounded-lg border cursor-pointer transition ${
                        selectedUser?.id === user.id
                            ? "bg-indigo-600 text-white border-indigo-700"
                            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                    }`}
                >
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm opacity-80">{user.email}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default UserSelector;
