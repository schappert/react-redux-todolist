/// <reference types="vitest" />
import {fireEvent, render, screen} from "@testing-library/react";
import UserSelector from "./user-selector.tsx";
/*
Couverture de tests

Rendu des données (noms + emails)
Intéraction (clic utilisateur → callback appelé)
Style conditionnel (le bon utilisateur est surligné).
 */
describe("UserSelector", () => {
    const users = [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
    ];

    it("renders the list of users", () => {
        render(
            <UserSelector users={users} selectedUser={null} onSelectUser={() => {}} /> as React.ReactElement
        );

        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
    });

    it("renders user emails", () => {
        render(<UserSelector users={users} selectedUser={null} onSelectUser={() => {}} /> as React.ReactElement
        );

        expect(screen.getByText("alice@example.com")).toBeInTheDocument();
        expect(screen.getByText("bob@example.com")).toBeInTheDocument();
    });

    it("calls onSelectUser when a user is clicked", () => {
        const mockSelect = vi.fn();
        render(<UserSelector users={users} selectedUser={null} onSelectUser={mockSelect} /> as React.ReactElement
        );

        fireEvent.click(screen.getByText("Alice"));

        expect(mockSelect).toHaveBeenCalledTimes(1);
        expect(mockSelect).toHaveBeenCalledWith(users[0]);
    });

    it("applies active style to selected user", () => {
        render(<UserSelector users={users} selectedUser={users[1]} onSelectUser={() => {}} /> as React.ReactElement
        );

        const selectedLi = screen.getByText("Bob").closest("li");
        const unselectedLi = screen.getByText("Alice").closest("li");

        expect(selectedLi).toHaveClass("bg-indigo-600");
        expect(unselectedLi).toHaveClass("bg-gray-50");
    });
});
