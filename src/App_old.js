import { useState } from 'react';

// TodoApp
const App_old = () => {
  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용
  const [todos, setTodos] = useState([
    { id: 1, title: '공부하기', content: 'todolist 만들기', done: false },
    { id: 2, title: '운동하기', content: '웨이트', done: true },
  ]); // 할일 목록

  // 제목을 변경했을 때
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 내용을 변경했을 때
  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  // 등록 버튼을 눌렀을 때
  const onSubmit = (event) => {
    event.preventDefault();
    if (title !== '' && content !== '') {
      setTodos((prev) =>
        prev.concat({
          id: todos.length + 1,
          title,
          content,
          done: false,
        }),
      );
      setTitle('');
      setContent('');
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  // 완료 상태 바꾸기
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // 삭제하기
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-title">제목</label>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          id="todo-title"
        />
        <label htmlFor="todo-content">내용</label>
        <input
          type="text"
          value={content}
          onChange={onContentChange}
          id="todo-content"
        />
        <button>등록</button>
      </form>

      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

// 할일 목록 컴포넌트
const TodoList = ({ todos, onToggle, onRemove }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};

// 할일 컴포넌트
const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, title, content, done } = todo; //비구조화할당

  return (
    <li>
      <h2>{title}</h2>
      <span>{done ? '⭕' : '❌'}</span>
      <span>{content}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      <button onClick={() => onToggle(id)}>완료</button>
    </li>
  );
};

export default App_old;
