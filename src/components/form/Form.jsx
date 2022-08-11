import './Form.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';

const Form = () => {
  // const initialState = {
  //   id: 0,
  //   title: '',
  //   content: '',
  //   isDone: false,
  //   createdAt: null,
  // };

  const initialState = useSelector((state) => state.todos.todo);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState(initialState);

  const handleChangeState = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  let dataId = useRef(3); // 이전 useRef 사용했던 거 대신 ㄹㅇ 숫자로,,
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().getTime();
    if (todo.title.trim() === '' || todo.content.trim() === '') return;
    dispatch(addTodo({ ...todo, id: dataId.current, createdAt }));
    setTodo(initialState);
    dataId.current++;
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label className='form-label' htmlFor='title'>
          제목
        </label>
        <input
          className='add-input'
          name='title'
          value={todo.title}
          onChange={handleChangeState}
          type='text'
        />
        <label className='form-label' htmlFor='content'>
          내용
        </label>
        <input
          className='add-input'
          name='content'
          value={todo.content}
          onChange={handleChangeState}
          type='text'
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
