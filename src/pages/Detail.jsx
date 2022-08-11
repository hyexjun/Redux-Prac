import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoByID } from '../redux/modules/todos';
import Comment from '../components/comment/Comment';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  const todo = useSelector((state) => state.todos.todo);
  console.log(todo);

  return (
    <>
      <Layout>
        <Header />
        <DetailBox>
          <DetailNo>No. {todo.id} 🎂</DetailNo>
          <DetailTitle>{todo.title}</DetailTitle>
          <DetailContent>{todo.content}</DetailContent>
        </DetailBox>
        <Comment />
      </Layout>
    </>
  );
};

const DetailBox = styled.div`
  width: 500px;
  height: 150px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

const DetailNo = styled.div`
  margin-bottom: 10px;
`;

const DetailTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  font-size: 18px;
`;

export default Detail;
