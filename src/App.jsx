import React from 'react'
import '../src/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import NavBar from './components/Pages/NavBar'
import Footer from './components/Pages/Footer'
import Products from './components/Pages/Products'
import Product from './components/Pages/Product'
import Cart from './components/Pages/Cart'
import SignUp from './components/user/SignUp';
import SignIn from './components/user/SignIn';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import OrderList from './components/Pages/OrderList'

function App() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
         
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/orderlist/:id' element={<OrderList/>} /> 
              <Route path='/contact' element={<Contact />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/forgot_password' element={<ForgotPassword />} />
              <Route path='/reset_password/:token' element={<ResetPassword />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
        
      </div>
    </>
  )
}

export default App