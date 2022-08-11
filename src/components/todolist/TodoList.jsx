import './TodoList.css';
import Todo from '../todo/Todo';
import { useSelector } from 'react-redux';


const TodoList = () => {
  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);

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
            />
          ) : null
        )}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
