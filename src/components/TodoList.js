import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
