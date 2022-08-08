import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// const countModifier = () => {
//   return 'hello';
// };

const countModifier = (count = 0, action) => {
  // state = 0으로 default
  console.log(count, action);
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); // reducer 함수 필요!

// dispatch 수동처리
countStore.dispatch({ type: 'ADD' }); // 1
countStore.dispatch({ type: 'ADD' }); // 2
countStore.dispatch({ type: 'ADD' }); // 3
countStore.dispatch({ type: 'ADD' }); // 4
countStore.dispatch({ type: 'MINUS' }); // 3

console.log('수동처리', countStore.getState()); // 3

// 버튼으로 연결해보기
// add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
// minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));

const handleAdd = () => countStore.dispatch({ type: 'ADD' });
const handleMinus = () => countStore.dispatch({ type: 'MINUS' });
add.addEventListener('click', () => handleAdd());
minus.addEventListener('click', () => handleMinus());

// 그럼 이제 number위치에 innerText를 해줍시다.
const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange); // 구독.. 구독......