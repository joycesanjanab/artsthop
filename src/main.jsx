import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import ProductsList from './ProductsList/ProductsList';
import ViewProduct from './ViewProduct/ViewProduct';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/loginPage'
import RegisterPage from'./RegisterPage/RegisterPage';
import Orders from './Orders/Orders';
import CartDetails from './CartDetails/CartDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/home' exact element={<App />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/register' exact element={<RegisterPage />} />
        <Route path='/products' exact element={<ProductsList />} />
        <Route path='/view/:id' exact element={<ViewProduct />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/cartDetails/:bill'  element={<CartDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
