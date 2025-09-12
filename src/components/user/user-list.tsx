import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store.ts";
import { selectUsers, User, selectSelectedUsers, toggleSelectedUser } from "../../features/users-slice.ts";
import { Link } from "react-router-dom";

const UserList: React.FC = () => {
    const users = useSelector((state: RootState) => selectUsers(state));
    const selectedUsers = useSelector((state: RootState) => selectSelectedUsers(state));
    const dispatch = useDispatch();

    const handleToggleUser = (user: User) => {
        dispatch(toggleSelectedUser(user));
    };

    return (
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        Utilisateurs disponibles
                    </h2>
                    <div className="text-sm text-gray-500">
                        Sélectionnez les utilisateurs pour attributions de tâches
                    </div>
                </div>
                <Link
                    to="/assignment"
                    className={`ml-4 px-4 py-2 rounded-lg font-medium text-white transition ${
                        selectedUsers.length > 0
                            ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                            : "bg-gray-400 cursor-not-allowed pointer-events-none"
                    }`}
                >
                    Attribuer des tâches
                </Link>
            </div>

            {!users ? (
                <p className="text-gray-500">Aucun utilisateur chargé.</p>
            ) : (
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => handleToggleUser(user)}
                            className={`cursor-pointer p-3 rounded-lg border transition ${
                                selectedUsers.find((u) => u.id === user.id)
                                    ? "bg-indigo-600 text-white border-indigo-700"
                                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                            }`}
                        >
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm opacity-80">{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}

            {selectedUsers.length > 0 && (
                <div className="mt-8 bg-gray-100 rounded-2xl p-3">
                    <h3 className="text-lg font-semibold text-gray-800">Sélectionnés :</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        {selectedUsers.map((u) => (
                            <li key={u.id}>{u.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserList;
