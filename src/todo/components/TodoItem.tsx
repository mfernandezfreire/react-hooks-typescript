// import { useContext } from 'react';
import { Todo } from '../interfaces/interfaces'
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

interface PropsTodoItem {
    todo: Todo
}

export const TodoItem = ({ todo }: PropsTodoItem) => {

    // const { toggleTodo } = useContext(TodoContext);
    const { toggleTodo } = useTodos();

    // const handledbClick = () => {
    //     toggleTodo(todo.id);
    // }

    return (
        <li
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed
                    ? 'line-through'
                    : ''
            }}
            onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    )
}
