// Action value
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const TOGGLE_STATUS_COMMENT = 'TOGGLE_STATUS_COMMENT';
const GET_COMMENT_BY_TODOID = 'GET_COMMENT_BY_TODOID';

// Action Creator
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};

export const toggleStatusComment = (payload) => {
  return {
    type: TOGGLE_STATUS_COMMENT,
    payload,
  };
};

export const getCommentByTodoId = (payload) => {
  return {
    type: GET_COMMENT_BY_TODOID,
    payload,
  };
};

// initial state
const initialState = {
  commentList: [
    {
      id: 1,
      writer: '콩콩이',
      body: '화이팅하세요!',
      createdAt: 1659311283308,
    },
  ],
  comment: {
    id: 0,
    writer: '',
    body: '',
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commentList: [...state.commentList, action.payload],
      };

    case DELETE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.filter(
          (comment) => comment.id !== action.payload
        ),
      };

    case TOGGLE_STATUS_COMMENT:
      return {
        ...state,
        commentList: state.commentList.map((comment) => {
          if (comment.id === action.payload) {
            return {
              ...comment,
              isDone: !comment.isDone,
            };
          } else {
            return comment;
          }
        }),
      };

    case GET_COMMENT_BY_TODOID:
      return {
        ...state,
        todo: state.todoList.find((todo) => {
          return parseInt(todo.id) === parseInt(action.payload);
        }),
      };

    default:
      return state;
  }
};

export default comments;
