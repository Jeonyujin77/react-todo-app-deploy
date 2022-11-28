import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, title, content, done } = todo; //비구조화할당

  return (
    <div className={done ? 'last-item' : ''}>
      <h2>{title}</h2>
      <span>{content}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      <button onClick={() => onToggle(id)}>{!done ? '완료' : '취소'}</button>
    </div>
  );
};

export default TodoListItem;
