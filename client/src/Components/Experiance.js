import React from 'react'
import './Experiance.css'
import {FaArrowAltCircleRight } from "react-icons/fa";
//<a className="cl" href="#">
                    //<FaArrowAltCircleRight/>
                   //</a>
function Experiance() {
  return (
    <section className="rows experience-area">
       <div class="containers">
       <div class="rows">
           <div class="col-sm-5 worker-image">
               <img src="images/expreence/1.png" alt=""/>
           </div>
           <div class="col-sm-7 experience-info">
              <div class="content">
                  <h2>OVER 15 YEARS EXPERIENCE IN INDUSTRY</h2> 
                  <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec.</p>  
              </div>
              <ul class="content-list">
                  <li>
                    <a href="#">Interior Furniture Manfacturing
                    </a>
                 </li>
                  <li>
                    <a href="#">Reparing of wooden almerah</a>
                    </li>
                  <li>
                    <a href="#">Hardwood Flooring</a>
                  </li>
                  <li>
                  <a href="#">Renovaion of office furnitures</a>
                  </li>
                  <li>
                   <a href="#">Make Quality Products</a>
                  </li>
              </ul>
              <div class="content-image">
              <img src="images/expreence/2.jpg" alt=""/>
              </div>
           </div>
       </div>
   </div> 
    </section>
  )
}

export default Experiance