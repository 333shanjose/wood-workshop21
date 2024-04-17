import React from 'react'
import './Company.css'
function Company() {
  return (
    <div>
       <section class="rows our-company-area sectpad" id="about-us">
   <div class="containers">
       <div class="rows m0">
           <div class="col-md-5">
                <div class="rows m0 company-contact">
                    <div class="rows m0 question-box">
                        <h2>Quick Free Quote </h2>
                        <form class="from-contact">
                            <input type="text" class="form-control" placeholder="Name"/>
                            <input type="email" class="form-control" placeholder="Email"/>
                            <select class="selectpicker show-tick form-control" tabindex="-98">
                                <option>Select Service</option>
                                <option>pencil</option>
                                <option>brush</option>
                            </select>
                            <textarea class="form-control textarea" placeholder="Description"></textarea>
                            <button type="submit" class="btn btn-default button submit">
                                submit now<i class="fa fa-angle-double-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
           </div>
           <div class="col-md-7 company-info">
              <div class="rows m0 section_header">
                  <h2>About OUr Company</h2> 
                  <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti</p>  
              </div>
              <ul class="content-list">
                  <li><a href="#">Interior Furniture Manfacturing</a></li>
                  <li><a href="#">Reparing of wooden almerah</a></li>
                  <li><a href="#">Hardwood Flooring</a></li>
                  <li><a href="#">Renovaion of office furnitures</a></li>
                  <li><a href="#">Make Quality Products</a></li>
              </ul>
              <div class="info-text">
                   <h4>Expert Workers</h4>
                   <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci. Rectetur elit. Vestibulum.</p>
              </div>
           </div>
       </div>
   </div>
</section>
    </div>
  )
}

export default Company