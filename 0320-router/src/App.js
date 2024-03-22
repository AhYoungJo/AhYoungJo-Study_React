import './Styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
// import Main from './Pages/MainPage'
// import ProductPage from './Pages/ProductPage';
// import NotFound from './Pages/NotFound';
// import ProductDetailPage from './Pages/ProductDetailPage';
import Main from './Assignment/Components/Main';
import Students from './Assignment/Pages/Students';
import CodingOn from './Assignment/Pages/CodingOn';
// import Search from './Assignment/Pages/Search';
import SearchStudent from './Assignment/Pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Main />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/products/:productId' element={<ProductDetailPage />} />
          <Route path='/*' element={<NotFound/>} /> */}
          <Route path='/' element={<Main />} />
          <Route path='/student/xdt' element={<Students />}>학생DT</Route>
          <Route path='/student/codingon' element={<CodingOn />}>코딩온</Route>
          <Route path='/student/new' element={<SearchStudent />}>searchParams</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
