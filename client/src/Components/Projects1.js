import React, {useEffect,useState,useRef} from 'react'  

function Projects1() {
    var Isotope = require('isotope-layout');
    var imagesLoaded=require('imagesloaded')
    const isotope =useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] =useState('*')
  const handleFilterKeyChange = key => () => setFilterKey(key)
      console.log({filterKey})
  

  // initialize an Isotope object with configs
     useEffect(()=>{
       
        imagesLoaded(('#projects'),{

        }, function(){
            console.log('all images are loaded');
    
    // init Isotope after all images have loaded
    isotope.current = new Isotope('#projects',{
        itemSelector: '.project',
        layoutMode: 'masonry',
        masonry: {                        
            columnWidth: '.grid-sizer'
        }    
                                     
    })

     filterKey === '*'
     ? isotope.current.arrange({filter: `*`}) 
         
       : isotope.current.arrange({filter: `${filterKey}`})

})                        
      // cleanup

})          
  return (
    <>
     <div>
      <section className="rows latest_projects sectpad projects-1">
       <div className="containers">
          <div class="rows m0 section_header">
            <h2>Our Latest Projects</h2>
          </div>
          <div class="rows m0 filter_row">
            <ul class="nav project_filter" id="project_filter2">
                <li onClick={handleFilterKeyChange('*')}>all</li>
                <li onClick={handleFilterKeyChange('.indoor')}>indoor furniture</li>
                <li onClick={handleFilterKeyChange('.renovation')}>renovation of house</li>
                <li onClick={handleFilterKeyChange('.hardwood')}>hardwood flooring</li>
                <li onClick={handleFilterKeyChange('.wood_supply')}>wood supply</li>
                <li onClick={handleFilterKeyChange('.manufacturing')}>furniture manufacturing</li>
                <li onClick={handleFilterKeyChange('.repairing')}>repairing</li>
            </ul>
        </div>
        <div class="projects2 popup-gallery" id="projects" style={{position:'relative'}}>
            <div className="grid-sizer"></div>
            <div class="col-sm-6 col-xs-6 project indoor wood_supply" id="name" style={{position:'absolute',left:'0px',top:'0px'}}>
                <div class="project-img">
                    <img src="images/latest-project/1.jpg" alt=""/>
                    <div class="project-text">                      
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/1.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-xs-6 project indoor hardwood renovation renovation" style={{position:'absolute',left:'475px',top:'0px'}}>
                <div class="project-img">
                    <img src="images/latest-project/2.jpg" alt=""/>
                    <div class="project-text">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/2.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>                                               
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-xs-6 project indoor manufacturing" style={{position:'absolute',left:'712px',top:'0px'}}>
                <div class="project-img">
                    <img src="images/latest-project/3.jpg" alt=""/>
                    <div class="project-text">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/3.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-xs-6 project manufacturing repairing" style={{position:'absolute',left:'475px', top:'217px'}}>
                <div class="project-img">
                    <img src="images/latest-project/4.jpg" alt=""/>
                    <div class="project-text">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/4.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-xs-6 project repairing renovation" style={{position:'absolute', left:'712px',top:'217px'}}>
                <div class="project-img">
                    <img src="images/latest-project/5.jpg" alt=""/>
                    <div class="project-text">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/5.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-6 project indoor wood_supply" style={{position:'absolute',left:'0px', top:'218px'}}> 
                <div class="project-img">
                    <img src="images/latest-project/6.jpg" alt=""/>
                    <div class="project-text">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="images/latest-project/6.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup"><i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="row m0">
                            <a href="projects-details.html"><h3>Kitchken renovation</h3></a>
                            <p>Wood Work of Racks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </section>
    </div>
    
    </>
  )
}

export default Projects1
   
