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
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import InputReview from './Pages/Dashboard/InputReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers';
import Footer from './Pages/Shared/Footer';
import RequairAdmin from './Pages/Login/RequireAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct'
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<RequairAuth><Shop></Shop></RequairAuth>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:purchaseId' element={<RequairAuth><Purchase></Purchase></RequairAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/dashboard' element={<RequairAuth><Dashboard></Dashboard></RequairAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<InputReview></InputReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allUsers' element={<RequairAdmin><AllUsers></AllUsers></RequairAdmin>}></Route>
          <Route path='manageProducts' element={<RequairAdmin><ManageProducts></ManageProducts></RequairAdmin>}></Route>
          <Route path='addProduct' element={<RequairAdmin><AddProduct></AddProduct></RequairAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
