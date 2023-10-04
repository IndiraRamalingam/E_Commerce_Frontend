import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {
  
  const { quantity } = useSelector((state) => state.cart);
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navigation'>
        <Container>
          <Link to='/'>
          <Navbar.Brand>
            <img src="https://us.123rf.com/450wm/stacyt13/stacyt131604/stacyt13160400107/57825697-vector-funny-cartoon-style-baby-shop-icon-sketchy-doodle-baby-accessories-store-icon.jpg?ver=6" width={200} height={95} />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto ">   
              <Link to ='/'><p className='nav-links m-3 mt-4'>HOME</p></Link>
              <Link to ='/products'><p className='nav-links m-3 mt-4'>PRODUCTS</p></Link>
              <Link to ='/contact'><p className='nav-links m-3 mt-4' >CONTACT</p></Link>
            </Nav>

            <Link to='/signin'>
            <a className="btn btncolorlogin m-3" 
            ><span style={{fontWeight:'bold'}}>Login</span>  <i className="fa-solid fa-right-to-bracket"></i></a>
            </Link>

            <Link to='/cart'>
            <a className="btn btn-success position-relative m-3" >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {quantity}
              </span>
            </a>
            </Link>
          
          </Navbar.Collapse>
         
        </Container>
       
      </Navbar>
      {/* <div className="Navbar">
        
          <div className="container">
            <Link to="/">Products</Link>
            <Link to="/cart" className="cart">
              {quantity !== 0 && <span>{quantity}</span>}
            </Link>
          </div>
        </div> */}

      <hr/>
    </>
  )
}

export default NavBar