import React from "react";

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
    return (
        <li className="flex items-center justify-between p-2 mb-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <span
          onClick={() => onToggle(id)}
          className={`cursor-pointer flex-1 ${completed ? "line-through text-gray-400" : ""}`}
      >
        {text}
      </span>
            <button
                className="text-red-500 hover:text-red-700 font-bold transition-colors"
                onClick={() => onDelete(id)}
            >
                ×
            </button>
        </li>
    );
};

export default TodoItem;
