import './Todo.css';
import { useNavigate } from "react-router-dom";

const Todo = ({ id, title, content, isDone, created_date, onRemove, onEdit }) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번 항목을 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='todo-container'>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <h5>{new Date(created_date).toLocaleString()}</h5>
        </div>
        <div className='button-set'>
          <button
            className='button button-delete'
            onClick={handleRemove}
          >
            삭제
          </button>
          <button className='button button-complete' onClick={() => onEdit(id)}>
            {isDone ? '취소' : '완료'}
          </button>
          <button className='button' onClick={() => navigate(`/detail/${id}`)}>상세</button>
        </div>
      </div>
    </> 
  );
};

export default Todo;
