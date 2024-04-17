import React from 'react'
import RevSlider, { Slide, Caption } from 'react-rev-slider';
import { FaPhoneAlt,FaFacebookF,FaGooglePlusG,FaLinkedinIn,FaTwitter,FaRegEnvelope,FaSearch,FaBabyCarriage} from "react-icons/fa";
import {FaStar, } from "react-icons/fa6";
import './Slider.css';

function Slider() {
    const config={
        sliderType:"standard",
        sliderLayout:"auto",
              delay:5000,
              navigation: {
                  arrows:{enable:true} 
              }, 
              gridwidth:1170,
              gridheight:740,
              
   }
  return (
    <div>
    
    <section className="bannercontainer rows" style={{overflow:'visible'}}>
    

        
       <RevSlider config={config}>
          
      
  
         
    <Slide
       src="/images/slider-img/bg.jpg"
       alt="slidebg1"
       slideProperties={{
           'data-transition': "slidehorizontal",
           'data-delay': "10000"
       }}
    >
    
      
        
         
            <Caption
              class="tp-caption"
              data-x="0" data-hoffset="690" 
              data-y="255" data-voffset="160"  data-whitespace="nowrap"  data-start="900">
               
                <div className="tp-captionn"> 
                we are available
                </div>  
                </Caption>
          <Caption
              class="tp-caption"
               data-x="0" data-y="310" data-hoffset="690"
              data-voffset="350" data-start="1200"  data-whitespace="nowrap" >
               
                <div className="tp-caption1"> 
                     for your wooden work
                </div>  
        </Caption>
        <Caption
              class="tp-caption"
              data-x='0' data-hoffset="690" data-y="375"
              data-voffset="470"  data-whitespace="nowrap" data-start="1500"  >
               
                <div className="tp-caption2"> 
                <ul className="nav">
                    <li className="nav-list">
                        <a href="#" className="list-link">
                                Domestic
                        </a>
                    </li>
                    <li className="nav-list1">
                        <a href="#" className="list-link1">
                                commercial
                        </a>
                    </li>
                    <li className="nav-list2">
                        <a href="#" className="list-link2">
                                Industrial
                        </a>
                    </li>
                 </ul>
                </div>  
        </Caption>
        <Caption
            class="tp-caption"
            data-x="0" data-hoffset="500" data-y="430" data-voffset="470" data-whitespace="nowrap" data-start="1800" >
               
                <div className="tp-caption3"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    <div className="break1">do eiusmod tempor incididunt ut labore et dolore magnar<br /></div>
                    <div className="break2">aliqua Ut enim ad minim veniam exercitation<br/></div>
                </div>  
        </Caption>     
        <Caption
            class="tp-caption"
            data-x="0" data-hoffset="690" data-y="550" data-voffset="555" data-whitespace="nowrap" data-start="2000">
                <a href="#" className="btn1">PUrchase now</a>
                <a href="#" className="btn2">our services</a> 
         </Caption>       
         
    </Slide>
    <Slide 
        src="/images/slider-img/2.jpg"
        alt="slidebg1"
        slideProperties={{
            'data-transition': "parallaxvertical",
            'data-delay': "10000"
        }}
     >
        <Caption
              class="tp-caption"
              data-x="left" data-hoffset="620" data-y="255" data-voffset="470" data-whitespace="nowrap" data-start="1500">
       <ul className="nav1">
       <li className="nav-lists">
                    <a href="#" className="list-links">
                      Domestic
                    </a>
               </li>
               <li className="nav-lists1">
                    <a href="#" className="list-links1">
                         commercial
                    </a>
               </li>
               <li className="nav-lists2">
                    <a href="#" className="list-links2">
                         Industrial
                    </a>
               </li>

       </ul>
        </Caption>
        <Caption
              class="tp-caption"
              data-x="left" data-hoffset="620" data-y="320" data-voffset="160" data-whitespace="nowrap" data-start="900">
               <div className="tp-captions1">
          <span className="spans">Design</span>
            futniture
             <div className="line-break"><br/></div>
          <span className="spans">Make</span>
            doors
     </div>
        
        </Caption>
    </Slide>
    
</RevSlider>
   </section>
   </div>
  )
}

export default Slider