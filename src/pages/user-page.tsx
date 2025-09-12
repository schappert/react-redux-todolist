import React from "react";
import UserFetcher from "../components/user/user-fetcher.tsx";
import UserList from "../components/user/user-list.tsx";

const UsersPage: React.FC = () => {
    return (
        <div className="mt-16 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            {/* Header de boutons */}
            <div className="flex space-x-4 mb-6">
                <UserFetcher />
            </div>
            <div>
                <UserList />
            </div>
        </div>
    );
};

export default UsersPage;
