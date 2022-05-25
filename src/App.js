import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Purchase/Purchase';
import RequairAuth from './Pages/Login/RequairAuth'
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/purchase/:purchaseId' element={
          <RequairAuth>
            <Purchase></Purchase>
          </RequairAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
