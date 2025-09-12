import TodoInput from "../components/todo/todo-input.tsx";
import {addTodo, removeTodo, Todo, toggleTodo} from "../features/todos-slice.ts";
import TodoItem from "../components/todo/todo-item.tsx";
import TodoContainer from "../components/todo/todo-container.tsx";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store.ts";

const TodoPage: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <TodoContainer>
            <TodoInput onAdd={(text) => dispatch(addTodo(text))} />
            <ul>
                {todos.map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggle={(id) => dispatch(toggleTodo(id))}
                        onDelete={(id) => dispatch(removeTodo(id))}
                    />
                ))}
            </ul>
        </TodoContainer>
    );
}
export default TodoPage;
