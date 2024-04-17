import React, {useEffect, useState} from 'react'


import './Header.css'


import { FaPhoneAlt,FaFacebookF,FaGooglePlusG,FaLinkedinIn,FaTwitter,FaRegEnvelope,FaSearch,FaBabyCarriage} from "react-icons/fa";
import {FaStar, } from "react-icons/fa6";
function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    })
  return (
     
       <header className={`rows header navbar-static-top slideIn affix-top animated ${scrollPosition > 50 ? "fadeInDown affix animated" : ""}`} id="main_navbar">
         <div className="containers">
             <div className='rows  m0 social-info'>
                <ul className="social-icon">
                    <li>
                       <a href="#">
                       <FaFacebookF />
                            

                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaTwitter/>
                            
                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaGooglePlusG/>
                            
                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaLinkedinIn/>
                            
                         
                       </a>
                    </li>
                    <li className="tel">
                    <a href="tel:+1234567890">
                       <FaPhoneAlt/>
                          + (123) 456 7890 
                         
                       </a>
                    </li>
                    <li className="email">
                       <a href="#">
                       <FaRegEnvelope/>
                         info@woodworkshop  
                         
                       </a>
                    </li>
                </ul>
             </div>
         </div>
            
             <div className="logo_part">
                <div className="logo">
                <a href="index.html" className="brand_logo">
                <img src="images/header/logo.png" alt="logo image"/>
               </a>
                </div>
             </div>
             <div class="main-menu">
              <nav className="navbar navbar-default">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_nav" aria-expanded="false">
                   <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
               </button>
                <div className="menu rows m0">
                     
                  <ul className="nav navbar-nav navbar-right visible-sm">
                  
                  <li className="dropdown">
                    
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                           <FaSearch/> 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                
                                <form action="#" method="get" className="search-form">
                                                                    
                                    <input type="search"  className="form-control" placeholder="Type and Enter" />
                                </form>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                     
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                           >
                          <FaBabyCarriage/>
                        </a>
                        <ul class="dropdown-menu cart-box ">
                            <li class="cart-header">
                                <h4>You have 2 Items In Your Cart.</h4>
                            </li>
                            <li class="cart-content">
                                <div class="img-box">
                                    <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                </div>
                                <div class="content">
                                    <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                    <div class="rating">
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <ul class="price">
                                        <li><span class="or-price">$39.99</span></li>
                                        <li><span class="sale-price">$24.5</span></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="cart-content">
                                <div class="img-box">
                                    <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                </div>
                                <div class="content">
                                    <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <ul class="price">
                                        <li><span class="or-price">$39.99</span></li>
                                        <li><span class="sale-price">$24.5</span></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="cart-footer">
                                <div class="total-price">
                                    <h4>Total price: <span>$73.5</span></h4>
                                </div>
                                <div class="checkout-box submit">
                                    <a class="" href="#">Checkout <i class="fa fa-shopping-cart"></i></a>
                                </div>
                            </li>
                        </ul>
                       
                        
                    </li>
                    
                                 

                  </ul>
                  <div className="collapse navbar-collapse" id="main_nav">
                  <ul class="nav navbar-nav">
                        <li class="dropdown active">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                            <ul class="dropdown-menu">
                                <li><a href="/">Home Default</a></li>
                                <li><a href="/landingpage">landing page</a></li>
                            </ul>
                        </li>
                        <li><a href="/about">About Us</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">services</a>
                            <ul class="dropdown-menu">
                                <li><a href="/services">services</a></li>
                                <li><a href="/services-2">services 2</a></li>
                            </ul>
                        </li>
                        
                        
                        
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu">
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/cart">Cart Page</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">contact us</a></li>
                    </ul>           
                    <ul class="nav navbar-nav navbar-right hidden-xs hidden-sm">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              <FaSearch/>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <form action="#" method="get" class="search-form">
                                        <input type="search" class="form-control" placeholder="Type and Enter"/>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <FaBabyCarriage/>
                            </a>
                            <ul class="dropdown-menu cart-box ">
                                <li class="cart-header">
                                    <h4>You have 2 Items In Your Cart.</h4>
                                </li>
                                <li class="cart-content">
                                    <div class="img-box">
                                        <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                    </div>
                                    <div class="content">
                                        <a href="product"><h5>BATTERY SCREWDRIVER</h5></a>
                                        <div class="rating">
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                        </div>
                                        <ul class="price">
                                            <li><span class="or-price">$39.99</span></li>
                                            <li><span class="sale-price">$24.5</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cart-content">
                                    <div class="img-box">
                                        <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                    </div>
                                    <div class="content">
                                        <a href="product"><h5>BATTERY SCREWDRIVER</h5></a>
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <ul class="price">
                                            <li><span class="or-price">$39.99</span></li>
                                            <li><span class="sale-price">$24.5</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cart-footer">
                                    <div class="total-price">
                                        <h4>Total price: <span>$73.5</span></h4>
                                    </div>
                                    <div class="checkout-box submit">
                                        <a class="" href="#">Checkout <i class="fa fa-shopping-cart"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                 </div>
                  </div>
              </nav>
        
    </div>
       </header>

      
  )
}

export default Header