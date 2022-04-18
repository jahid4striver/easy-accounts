import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Pages/Home/Services/Services';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Checkout from './components/Pages/Checkout/Checkout';
import Blogs from './components/Pages/Blogs/Blogs';
import Contact from './components/Pages/Contact/Contact';
import RequireAuth from './components/Pages/RequireAuth/RequireAuth';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/checkout/:serviceId' element={
        <RequireAuth>
          <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='about' element={<AboutMe/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
