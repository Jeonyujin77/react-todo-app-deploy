import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  // 할일 목록 상태
  const [todos, setTodos] = useState([
    { id: 1, title: '공부하기', content: 'todolist 만들기', done: false },
    { id: 2, title: '공부하기', content: 'js 고급 강좌듣기', done: false },
    { id: 3, title: '운동하기', content: '홈트레이닝', done: false },
  ]);

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
