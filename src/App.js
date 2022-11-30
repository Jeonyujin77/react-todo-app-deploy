import { memo, useCallback, useEffect, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import initDatas from './api/data.json';

const App = () => {
  // 할일 목록 상태
  const [todos, setTodos] = useState([]);
  const MemorizedTodoList = memo(TodoList); // 투두리스트 상태를 기억한다.

  // 초기로딩 시 데이터 가져온다.
  useEffect(() => {
    setTodos([...initDatas.data]);
  }, []);

  // 할 일 삭제 기능
  // 삭제하기
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 할 일 상태 수정 기능
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert setTodos={setTodos} />
      <MemorizedTodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></MemorizedTodoList>
    </TodoTemplate>
  );
};

export default App;
