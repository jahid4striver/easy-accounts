import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Pages/Home/Services/Services';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
