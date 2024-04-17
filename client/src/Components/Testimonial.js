import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
function Testimonial() {
    const options={
        loop:false,
        margin:30,
        items:2,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items: 2
            }
        }
    }
  return (
    <div>
       <section className="rows sectpad testimonial-area">
          <div className="containers">
          <div class="rows m0 section_header common">
            <h2>What our client says</h2> 
          </div>
          <div class="testimonial-sliders">

          <OwlCarousel  {...options}>
          <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/1.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
          <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/2.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/3.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/4.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/5.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="images/testimonial/6.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div>
            
            </OwlCarousel>
            
            
            
            
          </div>
          </div>
       </section>
    </div>
  )
}

export default Testimonial