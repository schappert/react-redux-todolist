import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store.ts";
import { getData, selectError, selectLoading } from "../../features/users-slice.ts";

const UserFetcher: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => dispatch(getData())}
                disabled={loading}
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {loading ? "Chargement..." : "Charger les utilisateurs"}
            </button>
            {error && (
                <p className="text-red-500 mt-2">Erreur lors du chargement.</p>
            )}
        </div>
    );
};

export default UserFetcher;
