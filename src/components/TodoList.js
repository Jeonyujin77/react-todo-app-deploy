import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { memo } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const MemorizedTodoListItem = memo(TodoListItem); // *할일 컴포넌트 memo

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <MemorizedTodoListItem
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
