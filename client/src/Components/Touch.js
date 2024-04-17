import React from 'react'

function Touch() {
  return (
    <div>
     <section className="rows touch">
    <div class="sectpad touch_bg">
        <div class="containers">
            <div class="rows m0 section_header color">
                <h2>get in touch</h2>
                <p>If you are interested in finding out more about how we can help your organization, please fill out the form below. you can call us anytime between 4 A.M. to 2 P. M. GMT</p>
            </div>
            
            <div class="rows touch_middle">
                <div class="col-md-4 open_hours">
                    <div class="rows m0 touch_top">
                        <ul class="nav">
                            <li class="item">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-map-marker"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        J-007, J Block, Kasna Industrial Area Site-V, Greater Noida U.P. 201310
                                    </div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa-regular fa-envelope"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        flaxwooden@gmail.com
                                      
                                    </div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-phone"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        +91 9871573346<br/>
                                        +91 9810423474
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8 input_form">
                    <form action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <input type="text" class="form-control" id="yourname" name="yourname" placeholder="First"/>
                        <input type="email" class="form-control" id="youremail" name="youremail" placeholder="Email"/>
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject"/>
                        <textarea class="form-control" rows="6" id="message" name="message" placeholder="Message"></textarea>
                        <div class="rows m0">
                            <button type="submit" class="btn btn-default submit">Submit Now</button>
                        </div>
                    </form>
                    <div id="success"><p>Your message sent successfully.</p></div>
                    <div id="error"><p>Something is wrong. Message cant be sent!</p></div>
                </div>
            </div>           
        </div>
    </div>
</section>
    </div>
  )
}

export default Touch