import './List.css';
import Todo from '../todo/Todo';
import { useSelector } from 'react-redux';

// const List = ({ todos, setTodos }) => {
const List = () => {
  const todos = useSelector((state) => state.todos.todoList);
  // console.log(todos);

  // const onRemove = (id) => {
  //   dispatch(deleteTodo(id));
  // };

  // const onEdit = (id) => {
  //   dispatch(toggleStatusTodo(id));
  // };

  return (
    <div className='list-container'>
      <p>
        총 {todos.length}개의 항목이 있습니다. 🏳‍🌈 할 일을 열심히 완료해봅시다
        ❗❗
      </p>
      <h2>Working..🔥</h2>
      <div className='list-wrapper'>
        {todos.map((todo) =>
          !todo.isDone ? (
            <Todo
              key={todo.id}
              todo={todo}
              // onRemove={onRemove}
              // onEdit={onEdit}
            />
          ) : null
        )}
      </div>
      <h2>Done..🌞</h2>
      <div className='list-wrapper'>
        {todos.map((todo) =>
          todo.isDone ? (
            <Todo
              key={todo.id}
              todo={todo}
              // onRemove={onRemove}
              // onEdit={onEdit}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

// 만약 todos가 0개일 때, 받아올 프롭이 없다고 오류 생기는 것을 방지
List.defaultProps = {
  todos: [],
}; // todo 0개여도 undefined 아니다! 빈배열 "있다"!!

export default List;
