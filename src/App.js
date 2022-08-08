import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
// import { useEffect } from 'react';
// import { db } from './firebase';
// import { collection, getDoc, getDocs } from 'firebase/firestore';

function App() {
  // useEffect(async () => {
  //   console.log(db);
  //   const query = await getDocs(collection(db, 'todos'));
  //   console.log(query);
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data);
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          {/* 위 라우터 경로에 해당하지 않는 경우 아래 404로 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
