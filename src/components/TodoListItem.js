import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, title, content, done } = todo; //비구조화할당

  return (
    <div className={done ? 'TodoListItem last-item' : 'TodoListItem'}>
      <h2>{title}</h2>
      <span>{content}</span>
      <div className="button-box">
        <button className="remove" onClick={() => onRemove(id)}>
          삭제
        </button>
        <button className="toggle" onClick={() => onToggle(id)}>
          {!done ? '완료' : '취소'}
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
