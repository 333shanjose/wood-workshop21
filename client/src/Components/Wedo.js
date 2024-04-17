import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';  

function Wedo() {
    
    const options = {
        loop:true,
        nav:true,
        margin:30,
        items:4,  
        responsiveClass:true,
        responsive:{
            0:{
                items:1
                
            },
            481:{
                items:2
                
            },
            700:{
                items:3
                
            },
            992:{
                items:4,
                
                
                
            }
        }
        
    };

  return (
    <section class="rows sectpad we-do-section">
    <div class="containers">
        <div class="rows m0 section_header color">
           <h2>What we do</h2> 
        </div>
        
        <div class="we-do-slider">
        
        <OwlCarousel  {...options}>
                
                
                
                
                
                <div class="item">
                    <div class="post-image">
                        <img src="images/we-do/1.jpg" alt=""/>
                    </div>
                    <a href="#">
                        <h4>HARDWOOD FLOORING</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet, cons ecte tur elit. Vestibulum nec odios suspe ndisse ipsum dolor sit.</p>
                </div>
                <div class="item">
                    <div class="post-image">
                        <img src="images/we-do/2.jpg" alt=""/>
                    </div>
                    <a href="#">
                        <h4>HOME WOOD WORK</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet, cons ecte tur elit. Vestibulum nec odios suspe ndisse ipsum dolor sit.</p>
                </div>
                <div class="item">
                    <div class="post-image">
                        <img src="images/we-do/3.jpg" alt=""/>
                    </div>
                    <a href="#">
                        <h4>Indoor Furniture</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet, cons ecte tur elit. Vestibulum nec odios suspe ndisse ipsum dolor sit.</p>
                </div>
                <div class="item">
                    <div class="post-image">
                        <img src="images/we-do/4.jpg" alt=""/>
                    </div>
                    <a href="#">
                        <h4>Outdoor Furniture</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet, cons ecte tur elit. Vestibulum nec odios suspe ndisse ipsum dolor sit.</p>
                </div>
                


                
                </OwlCarousel>
              
                
                
              
                
           
        </div>
        
    </div>
</section>
  )
}

export default Wedo