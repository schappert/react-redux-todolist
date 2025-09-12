import React, { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (!input.trim()) return;
        onAdd(input);
        setInput("");
    };

    return (
        <div className="flex mb-4">
            <input
                type="text"
                className="flex-1 p-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Ajouter une tâche..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            <button
                className="bg-indigo-600 text-white font-medium hover:bg-indigo-700 px-4 rounded-r-xl transition-colors"
                onClick={handleAdd}
            >
                Ajouter
            </button>
        </div>
    );
};

export default TodoInput;
