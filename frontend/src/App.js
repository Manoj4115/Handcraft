import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import About from './components/about';
import Cont from './components/Contact'
import Login from './components/Login'; 
import Signup from './components/Signup';
import Addproduct from './components/addproduct'


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
        <Router>
          <div>
            <ToastContainer theme='dark' position='top-center' />
            <Header cartItems={cartItems} />
            <Routes>
            <Route path="/"  element={ <Home />}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/search"  element={ <Home />}/>
                <Route path="/product/:id"  element={ <ProductDetail cartItems={cartItems}  setCartItems={setCartItems}  />}/>
                <Route path="/cart"  element={ <Cart cartItems={cartItems}  setCartItems={setCartItems}  />}/>
                <Route path='/about' element={<About />} />
                <Route  path='/contact' element={<Cont />} />
                <Route path="/login" element={<Login />} />
                <Route path='/addproduct' element={<Addproduct />} />



            </Routes>
          </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
