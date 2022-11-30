import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { memo } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const MemorizedTodoListItem = memo(TodoListItem); // 아이템 상태를 기억한다.

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
