import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    // 배열에 push하는 등 직접 건들지 않는다. 새로운 배열 리턴
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
// 구독.. 왤케 와닿지를 않냐ㅠㅠ

store.subscribe(() => {
  const toDos = store.getState();
  ul.innerHTML = ''; // 이 유무의 차이점은?
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
});

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener('submit', onSubmit);
