import React from 'react'

function Footer1() {
  return (
    <>
       <footer class="rows">
    <div class="rows m0 footer-top">
        <div class="container">
            <div class="rows footer-sidebar">
                <div class="widget about-us-widget col-sm-3 col-lg-3">
                    <a href="index.html" class="brand_logo">
                        <img src="images/header/logo.png" alt="logo image"/>
                    </a>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div class="social-icon row m0">
                        <ul class="nav">
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-skype"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>  
                        </ul>
                    </div>
                </div>
                <div class="widget widget-links col-sm-3 col-lg-3">
                    <h4 class="widget_title">our services</h4>
                    <div class="widget-contact-list row m0">
                        <ul>
                            <li><a href="#"><i class="fa fa-angle-right"></i>Interior Furniture</a></li>
                            <li><a href="#"><i class="fa fa-angle-right"></i>Hardwood Flooring</a></li>
                            <li><a href="#"><i class="fa fa-angle-right"></i>Renovation of Office Furniture</a></li>
                            <li><a href="#"><i class="fa fa-angle-right"></i>Repairing of Wood Roof</a></li>
                            <li><a href="#"><i class="fa fa-angle-right"></i>Outdoor Furniture</a></li>
                        </ul>
                    </div>
                </div>
                <div class="widget widget-contact  col-sm-3 col-lg-3">
                    <h4 class="widget_title">Get in Touch</h4>
                    <div class="widget-contact-list rows m0">
                       <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <div class="fleft location_address">
                                    Lorance 542B, Tailstoi Town 5248 MT, Wordwide Country
                                </div>
                            </li>
                            <li>
                                <i class="fa fa-phone"></i>
                                <div class="fleft contact_no">
                                    <a href="#">01865 524 8503</a>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-envelope"></i>
                                <div class="fleft contact_mail">
                                    <a href="#">info@woodworkshop.com</a>
                                </div>
                            </li>
                            <li>
                                <i class="icon icon-WorldWide"></i>
                                <div class="fleft service_time">
                                    Mon - Sat : 9am to 6pm Sunday Close
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="widget widget4 widget-form col-sm-3 col-lg-3">
                    <h4 class="widget_title">Drop a message</h4>
                    <div class="widget-contact-list rows m0">
                        <form class="submet-form rows m0" action="#" method="post">
                            <input type="text" class="form-control" id="name" placeholder="Name"/>
                            <input type="email" class="form-control" id="email" placeholder="Email Address"/>
                            <textarea class="form-control message" placeholder="Message"></textarea>
                            <button class="submit" type="submit">submit now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div class="rows m0 footer-bottom">
         <div class="containers">
            <div class="rows">
               <div class="col-sm-8">
                   Copyright © <a href="index.html">WoodWorkshop</a> 2016.<div className='visible-xs'><br/></div>
                   All rights reserved
               </div>
               <div class="right col-sm-4">
                   Created by: <a href="http://themeforest.net/user/designarc">DesignArc</a>
               </div>
            </div>
        </div>
     </div>
</footer>
    </>
  )
}

export default Footer1