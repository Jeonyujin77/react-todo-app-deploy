import { useState } from 'react';

const TodoInsert = ({ todos, setTodos }) => {
  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용

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
    event.preventDefault(); // 이벤트 기본 동작 막기

    // 제목, 내용이 다 입력된 상태면
    if (title !== '' && content !== '') {
      setTodos((prev) =>
        prev.concat({
          id: todos.length + 1,
          title,
          content,
          done: false,
        }),
      ); // 할일 목록에 추가
      setTitle('');
      setContent('');
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  return (
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
  );
};

export default TodoInsert;
