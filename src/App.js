import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Pagenotfound from './components/Pagenotfound';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import About from './components/About';
import Cart from './components/Cart';
import CartPayment from './components/Cartpayment';
import Chatbot from './components/Chatbot';
import Wishlist from './components/Wishlist';
import ReviewsPage from './components/ReviewsPage';





// import Customerservice from './components/Customerservice';





function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="">
          {/* <Navbarcomp/> */}
          <Navbar />
        </header>
      </div>

      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/makepayment' element={<Makepayment />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/cartpayment" element={<CartPayment />} />
        <Route path='/help' element={<Chatbot/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='reviews' element={<ReviewsPage/>}/>
        {/* <Route path='/help' element={<Customerservice/>} /> */}
        <Route path='/' element={<Getproducts />} />

        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
