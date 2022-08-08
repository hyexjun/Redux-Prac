import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';
import { useRef, useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      content: '인강 범위까지 다 보기',
      isDone: false,
      created_date: 1659311223308
    },
    {
      id: 2,
      title: 'JS 기초개념',
      content: '개념 노트 정리하기',
      isDone: true,
      created_date: 1659341238308
    },
  ]);

  const todoId = useRef(3); // 이미 더미로 1,2번이 있으니까 3부터
  const onCreate = (title, content) => {
    const created_date = new Date().getTime();
    const newTodo = {
      id: todoId.current,
      title,
      content,
      isDone: false,
      created_date,
    };
    todoId.current += 1;
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const onRemove = (targetId) => {
    const newTodos = todos.filter((todo) => todo.id !== targetId);
    // fillter 함수 조건 맞게 추출해서 새로운 배열 만들기
    setTodos(newTodos); // setTodos를 써서 새로운 배열로 바꿔주기
    // alert(`${targetId}번 항목이 삭제되었습니다.`);
  };

  // 수정 최종완료 버튼 눌렀을 때 아무 데이터로 매칭돼서 바뀌면 안되니까요
  const onEdit = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  };

  return (
    <>
      <Layout>
        <Header />
        <Form onCreate={onCreate} />
        <List onRemove={onRemove} onEdit={onEdit} todos={todos} />
      </Layout>
    </>
  );
}

export default Home;
