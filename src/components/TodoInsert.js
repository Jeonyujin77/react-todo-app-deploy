import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

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
    <form onSubmit={onSubmit} className="TodoInsert">
      <input
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={onTitleChange}
        id="todo-title"
      />
      <input
        type="text"
        placeholder="내용을 입력하세요."
        value={content}
        onChange={onContentChange}
        id="todo-content"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
