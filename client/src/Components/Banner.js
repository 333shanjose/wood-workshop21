import React, { useEffect } from 'react'
 
import './Banner.css';








function Banner() {
     
 
      
     
     const config={
          sliderType:"standard",
          sliderLayout:"auto",
                delay:5000,
                navigation: {
                    arrows:{enable:true} 
                }, 
                gridwidth:1170,
                gridheight:740
     }
    
          
        

 
    

  
     
            
     
   
   
     
      

  return (
  
    <div className="bannercontainer rows">
     
       
        <div data-version="5.0" className="rev-slider rows m0" id="rev_slider">
        
         <ul className="tp-revslider mainul">
         
           
            <li className="tp-revslider-slider" data-transition="slidehorizontal" data-delay="10000">
                <div className="slot-holder">
                
                   <div className="tp-bgimg" src="/images/slider-img/bg.jpg">
                     </div>
               
                     </div>
               
                     
                     <div className="tp-paralex-wrap">
                        <div className="tp-loop-wrap" style={{position:'absolute'}}>
                            <div className="tp-mask-wrap">
                                <div className="tp-caption" data-x="0" data-hoffset="690" 
                                  data-y="255" data-voffset="160"  data-whitespace="nowrap"  data-start="900" > 
                                     we are available
                                </div>  
                           </div>    
                      </div>
                      </div>
                           <div className="tp-paralex-wrap1">
                              <div className="tp-loop-wrap1" style={{position:'absolute'}}>
                                 <div className="tp-mask-wrap1">
                                     <div className="tp-caption1" data-x="0" data-y="310" data-hoffset="690"
                                       data-voffset="350" data-start="1200"  data-whitespace="nowrap">
                                           for your wooden work     </div>    
                                  </div>
                              </div>
                        </div>
                          <div className="tp-paralex-wrap2">
                              <div className="tp-loop-wrap2" style={{position:'absolute'}}>
                                    <div className="tp-mask-wrap2">
                                        <div className="tp-caption2" data-x='0' data-hoffset="690" data-y="375"
                                             data-voffset="470"  data-whitespace="nowrap" data-start="1500">
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
                                    </div>    
                              </div>

                          </div>   
                             <div className="tp-paralex-wrap3">
                             <div className="tp-loop-wrap3" style={{position:'absolute'}}>
                             <div className="tp-mask-wrap3">
                             <div class="tp-caption3" data-x="0" data-hoffset="500" data-y="430" data-voffset="470" data-whitespace="nowrap" data-start="1800">                    
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                 <div className="break1">do eiusmod tempor incididunt ut labore et dolore magnar<br /></div>
                                  <div className="break2">aliqua Ut enim ad minim veniam exercitation<br/></div>
                            </div>
                             </div>

                            </div>

                              </div>
                              <div className="tp-paralex-wrap4">
                                 <div className="tp-loop-wrap4" style={{position:'absolute'}}>
                                    <div className="tp-mask-wrap4">
                                    <div className="tp-caption4" data-x="0" data-hoffset="690" data-y="550" data-voffset="555" data-whitespace="nowrap" data-start="2000">                    
                                         <a href="#" className="btn1">PUrchase now</a>
                                          <a href="#" className="btn2">our services</a>
                                    </div>
                                    </div>
                                 </div>
                                 </div>
                                 </li>
                                 
                                
                                 <li data-transition="parallaxvertical" className="tp-revslider-slider1">
  <div className="slot-holder1">
     <div className="tp-bgimg1" src="/images/slider-img/2.jpg">
         
     </div>
   </div>
   <div className="tp-paralex1-wrap">
      <div className="tp-loop1-wrap" style={{position:'absolute'}}>
      <div className="tp-mask1-wrap">
      <div class="tp-captions" data-x="left" data-hoffset="620" data-y="255" data-voffset="470" data-whitespace="nowrap" data-start="1500">
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
     </div>
      </div>

   </div>

   </div>
   <div className="tp-paralex2-wrap">
      <div className="tp-loop2-wrap" style={{position:'absolute'}}>
      <div className="tp-mask2-wrap">
      <div className="tp-captions1" data-x="left" data-hoffset="620" data-y="320" data-voffset="160" data-whitespace="nowrap" data-start="900">
          <span className="spans">Design</span>
            futniture
             <div className="line-break"><br/></div>
          <span className="spans">Make</span>
            doors
     </div>
      </div>

   </div>

   </div>

   
   
</li>

            
                      </ul>
                    
                      <div className="tp-loader-spinner0" style={{display:'none'}}>
                         <div class="dot1">
                         </div>
                         <div class="dot2">
                         </div>
                         <div class="bounce1">
                         </div>
                         <div class="bounce2">
                         </div>
                         <div class="bounce3">
                         </div>
                         </div> 
                   <div className="tp-banner-timer">
                          
                   </div>

                  <div className="tp-leftarrow  tp-arrows">


                  </div>

                    
                
          </div>
         
      
        

    </div>
     
    
    

   
    
    
   

   
  
     
    
   

  )
   }


export default Banner

