import React, { useEffect,useState } from 'react'
import axios from 'axios'
import AnchorLink from "react-anchor-link-smooth-scroll";
function Blog1() {
    const[products,setProducts]=useState([])
    const [url,setUrl]=useState('')

    function cart(id){
        console.log(id)
        axios.get(url+'/cartt/'+id).then((cart)=>{
            console.log(cart)
        })
    
    }       
     

    
            
        
    
    
    useEffect(()=>{
        setUrl(window.location.origin)

        axios.post(url+'/admin/getp',{withCredentials:true}).then((res)=>{
            console.log(res)
            setProducts(res.data.products)
        })
             
        
    
        var name=document.getElementById('name')
        var name1=document.getElementById('name1')
        var name2=document.getElementById('name2')


        var description=document.getElementById('description')
        var specification=document.getElementById('specification')
        var review=document.getElementById('review')


        name.addEventListener('click',tab)
        function tab(){
            this.classList.add('active')
            description.style.display="block"
            name1.classList.remove('active')
            name2.classList.remove('active')
            specification.style.display="none"
            review.style.display="none"
            
        }
        name1.addEventListener('click',tab1)
        function tab1(){
            this.classList.add('active')
            specification.style.display="block"
            name.classList.remove('active')
            name2.classList.remove('active')
            description.style.display="none"
            review.style.display="none"
            
        }
        name2.addEventListener('click',tab2)
        function tab2(){
            this.classList.add('active')
            review.style.display="block"
            name.classList.remove('active')
            name1.classList.remove('active')
            description.style.display="none"
            specification.style.display="none"
            
        }
       
    })
  return (
    <>
     <section class="row blog_content" id="k">
    <div class="container">
        <div class="row sectpad">
            <div class="blog_section col-lg-8 shop-page-content product-page">
           
            <div class="row product-details-box">
                
                <div class="col-lg-6 img-holder" >
                    <img src=''  alt=""/>
                </div>
                <div class="col-lg-6">
                    <h3></h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span>Price : <b></b></span>
                    <span>Quantity : <input type="text" value="1"/> </span>
                    <a href="cart-page.html" class="submit">Add To Cart</a>
                </div>
            </div>
            
                <div class="product-details-tab-title row">
                    <div class="col-lg-12">
                        <ul>
                            <li id="name" data-tab-name="description" class="active"><span>Descripton</span></li>
                            <li  id="name1" data-tab-name="specification"><span>Specification</span></li>
                            <li id="name2" data-tab-name="review"><span>Review (0)</span></li>
                        </ul>
                    </div>
                </div>
                <div class="product-details-tab-content row">
                    <div class="col-lg-12" id="description" style={{display:'block'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div class="col-lg-12" id="specification" style={{display:'none'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div class="col-lg-12" id="review" style={{display:'none'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>

                <div class="row best-seller">
                    <div class="row m0 section_header color">
                        <h2>Related Product</h2> 
                    </div>
                </div>
                <br/>
               
                {products.map((product)=>{    

                     return(  
                          
            
                     
                    <div class="col-lg-4 col-md-4 single-shop-item">
                     
                       
                        <img src={'images/'+product.filename} alt="n" style={{height:'200px'}}/>
                       
                         
                        <div class="meta">
                            <h4></h4>
                            <div class="star-rating"> 
                                <i class="fa fa-star" data-rating="1"></i>
                                <i class="fa fa-star" data-rating="2"></i>
                                <i class="fa fa-star" data-rating="3"></i>
                                <i class="fa fa-star" data-rating="4"></i>
                                <i class="fa fa-star-o" data-rating="5"></i>
                                <input type="hidden" name="whatever" class="rating-value" value="3"/>
                            </div>
                            <span>Price: <b>{product.price}</b></span>
                            <button onClick={()=>cart(product._id)}>
                                <div class="cart-button">
                                    <p>add to cart</p>
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                            </button>
                        </div>
                        
                    </div>
                    
                   
                        
                       
                
                     )
                })}
               
            </div>
            <div class="sidebar_section col-lg-4">
                <div class="sidebar row m0">
                    <div class="row widget widget-search">
                        <div class="row widget-inner">
                            <form action="#" class="search-form" method="get">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Enter Search keywords"/>
                                    <span class="input-group-addon">
                                        <button type="submit"><i class="icon icon-Search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div> 
                    <div class="row widget widget-categories">
                        <h4 class="widget-title">Categories</h4>
                        <div class="row widget-inner">
                            <ul class="nav categories">
                                <li><a href="#"><i class="fa fa-angle-right"></i>Interior Furniture Manfacturing</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i>Reparing of Wooden Almerah</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i>Hardwood Flooring</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i>Renovaion of office furnitures</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i>Make Quality Products</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i>Renovation of Kitchen</a></li>
                            </ul>
                        </div>
                    </div> 
                    <div class="row widget widget-popular-posts">
                        <h4 class="widget-title">popular posts</h4>
                        <div class="row widget-inner">
                            <div class="media popular-post">
                                <div class="media-left"><a href="single.html">
                                    <img src="images/blogs/post1.jpg" alt=""/></a></div>
                                <div class="media-body">
                                    <h5 class="post-title"><a href="blog-details.html">Neque porro quisua mest qui dolorem.</a></h5>
                                    <h5 class="post-date"><a href="blog-details.html">20 june</a></h5>                            
                                </div>
                            </div>
                            <div class="media popular-post">
                                <div class="media-left"><a href="blog-details.html">
                                  <img src="images/blogs/post2.jpg" alt=""/></a></div>
                                <div class="media-body">
                                    <h5 class="post-title"><a href="blog-details.html">Neque porro quisua mest qui dolorem.</a></h5>
                                    <h5 class="post-date"><a href="blog-details.html">20 june</a></h5>                            
                                </div>
                            </div> 
                            <div class="media popular-post">
                                <div class="media-left"><a href="blog-details.html">
                                    <img src="images/blogs/post3.jpg" alt=""/></a></div>
                                <div class="media-body">
                                    <h5 class="post-title"><a href="blog-details.html">Neque porro quisua mest qui dolorem.</a></h5>
                                    <h5 class="post-date"><a href="blog-details.html">20 june</a></h5>                            
                                </div>
                            </div> 
                        </div>
                    </div> 
                    <div class="row widget text-widget-post">
                        <h4 class="widget-title">Text Widget</h4>
                        <div class="text-widegt widget-inner">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium dolore que laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi arc</p>
                        </div>
                    </div> 
                    <div class="row widget widget-tag-clouds">
                        <h4 class="widget-title">tag clouds</h4>
                        <div class="row widget-inner clouds">
                            <a href="blog-details.html" class="widget-tag">Kitchen Renovation</a>
                            <a href="blog-details.html" class="tag widget-tag active">Tips</a>
                            <a href="blog-details.html" class="widget-tag">Indoor Furniture</a>
                            <a href="blog-details.html" class="tag widget-tag">Repairing</a>
                            <a href="blog-details.html" class="widget-tag">Wood Supply</a>
                            <a href="blog-details.html" class="tag widget-tag">Flooring </a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}

export default Blog1