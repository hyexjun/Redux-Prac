import './Todo.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../redux/modules/todos';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onEdit = (id) => {
    dispatch(todosActions.toggleStatusTodo(id));
  };

  const onRemove = (id) => {
    if (window.confirm(`${todo.id}번 항목을 삭제하시겠습니까?`)) {
      dispatch(todosActions.deleteTodo(todo.id));
    }
    
  };


  const navigate = useNavigate();

  return (
    <>
      <div className='todo-container'>
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <h5>{new Date(todo.createdAt).toLocaleString()}</h5>
        </div>
        <div className='button-set'>
          <button className='button button-delete' onClick={onRemove}>
            삭제
          </button>
          <button
            className='button button-complete'
            onClick={() => onEdit(todo.id)}
          >
            {todo.isDone ? '취소' : '완료'}
          </button>
          <button
            className='button'
            onClick={() => navigate(`/detail/${todo.id}`)}
          >
            상세
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
