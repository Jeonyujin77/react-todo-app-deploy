import { useEffect, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import initDatas from './api/data.json';

const App = () => {
  // 할일 목록 상태
  const [todos, setTodos] = useState([]);

  // 초기로딩 시 데이터 가져온다.
  useEffect(() => {
    console.log('CALL THE API');
    setTodos([...initDatas.data]);
  }, []);

  // 할 일 삭제 기능
  // 삭제하기
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 상태 수정 기능
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
};

export default App;
