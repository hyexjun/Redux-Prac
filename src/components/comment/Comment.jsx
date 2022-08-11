import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComment } from '../../redux/modules/comments';

const Comment = () => {
  const initialState = useSelector((state) => state.comments.comment);
  // console.log(initialState); // store에서 불러온 comment 초기값

  const allComment = useSelector((state) => state.comments.commentList);
  console.log(allComment);

  const [comment, setComment] = useState(initialState);

  const handleChangeState = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  let dataId = useRef(2);
  const handleSubmit = () => {
    const createdAt = new Date().getTime();
    if (comment.writer.trim() === '' || comment.body.trim() === '') return;
    dispatch(addComment({ ...comment, id: dataId.current, createdAt }));
    setComment(initialState);
    dataId.current++;
  };

  return (
    <>
      <StDivCommentForm>
        <label htmlFor='writer'>작성자</label>
        <input
          name='writer'
          value={comment.writer}
          onChange={handleChangeState}
          type='text'
        />
        <label htmlFor='body'>응원</label>
        <input
          name='body'
          value={comment.body}
          onChange={handleChangeState}
          type='text'
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          등록
        </button>
      </StDivCommentForm>
      <StDivCommentsBox>
        {allComment.map((comment) => (
          <StDivCommentBox key={comment.createdAt}>
            <p>작성자 {comment.writer}</p>
            <p>내용 {comment.body}</p>
            <p>작성일시 {new Date(comment.createdAt).toLocaleString()}</p>
          </StDivCommentBox>
        ))}
      </StDivCommentsBox>
    </>
  );
};

const StDivCommentForm = styled.div`
  width: 800px;
  background-color: rgb(223, 226, 255);
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* gap: 20px; */
`;

const StDivCommentsBox = styled.div`
  border: 1px solid rebeccapurple;
  margin: 10px;
`

const StDivCommentBox = styled.div`
  width: 600px;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgb(233, 235, 248)
`;

export default Comment;
