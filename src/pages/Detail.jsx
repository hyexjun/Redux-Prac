import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import styled from 'styled-components';

const Detail = () => {
  return (
    <>
      <Layout>
        <Header />
        <DetailBox>
          <div>게시 번호</div>
          <div>할일 제목</div>
          <div>상세 내용</div>
        </DetailBox>
      </Layout>
    </>
  );
};

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
`;

export default Detail;
