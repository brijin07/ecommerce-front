import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';
import Favorite from './components/Favorite';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
<Header/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
