import { useState, useRef } from 'react';
import './Form.css';

const Form = ({ onCreate }) => {
  // const [title, setTitle] = useState(''); [1]
  // const [content, setContent] = useState(''); [2]
  // 둘다 문자열이고 구성도 비슷하면 state 두개로 쓸 것 없이 객체로 만들어도 된담

  // [3] 이렇게 객체처럼 세트묶음 해도 된다
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });

  // 입력된 값을 바꿔 채우는 함수
  const handleChangeState = (event) => {
    // console.log(event.target.name); // 변화 감지된 항목 이름 보는 용
    // console.log(event.target.value); // 변화 감지된 항목의 값 보는 용
    setTodo({
      // 데이터 변화는 무조건 set어쩌구 써야됨
      ...todo, // 원래 state를 넣어주지 않으면 안됨!
      [event.target.name]: event.target.value,
      // 안쓰면 타겟 제외한 나머지는 날아가고 변화된 값만 남아버림
    });
  };

  const titleInput = useRef();
  const contentInput = useRef();
  // 실제 내용 저장버튼 누르면 실행되는 함수
  const handleSubmit = () => {
    if (todo.title.length < 1) {
      alert('공백은 안돼!');
      titleInput.current.focus();
      return;
    }
    if (todo.content.length < 1) {
      alert('공백은 안돼!');
      contentInput.current.focus();
      return;
    }

    onCreate(todo.title, todo.content);
    alert('목록에 잘 추가되었습니다 :)');
    // 이건 입력한 뒤 인풋박스에 입력값 썼던 거 다시 비워주기
    setTodo({
      title: '',
      content: '',
    });
  };

  return (
    <div className='form'>
      <div className='input-group'>
        <label className='form-label' htmlFor='title'>
          제목
        </label>
        <input
          className='add-input'
          ref={titleInput}
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
          ref={contentInput}
          name='content'
          value={todo.content}
          onChange={handleChangeState}
          type='text'
        />
      </div>
      <button onClick={handleSubmit}>추가하기</button>
    </div>
  );
};

export default Form;
