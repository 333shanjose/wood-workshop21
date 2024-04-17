import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Checkout() {
    const[products,setProducts]=useState([])
    const[total,setTotal]=useState([])
    const[totale,setTotale]=useState('')
    const[url,setUrl]=useState('')


    useEffect(()=>{
        setUrl(window.location.origin)

        axios.get(url+'/cart-pages').then((res)=>{                       
            setProducts(res.data.cart)
            console.log(products)

            
          })
          axios.get(url+'/total').then((res)=>{
            setTotal(res.data.totals)
        })
        axios.get(url+'/totals').then((res)=>{
            console.log(res)
            setTotale(res.data)
        })
    },[])
  return (
    <>
      <section id="checkout-content" class="shop-page-content">
    <div class="containers">
    <form action={url+'/place-order'} method="post">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-checkout">
                <div class="row m0 section_header">
                    <h2>Billing Address</h2>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label>First Name <span>*</span></label>
                        <input type="text" placeholder="First Name" name="names"/>
                    </div>
                    <div class="col-lg-6">
                        <label>Last Name <span>*</span></label>
                        <input type="text" placeholder="Last Name" name="lastname"/>
                    </div>
                </div>
                
               
                
                
                <div class="row">
                    <div class="col-lg-6">
                        <label>Email Address <span>*</span></label>
                        <input type="text" placeholder="Email Address"/>
                    </div>
                    <div class="col-lg-6">
                        <label>Phone <span>*</span></label>
                        <input type="text" placeholder="Phone"/>
                    </div>
                </div>
                
               
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
                <div class="row section_header">
                    <h2>Your Orders</h2>
                </div>
                <br/>
                
                <div class="row">
                    
                    <div class="col-lg-12 order-box">
                       <div> 
                        <p style={{fontSize:'20px',marginBottom:'10px'}}>PRODUCT
                        <p style={{fontSize:'20px',float:'right',marginBottom:'0px'}}>TOTAL</p></p>
                      </div>
                        
                        <ul>
                           <div style={{width:'100px',display:'inline-block'}}> 
                            {products.map((p)=>{
                            return (

                             <div> 
                            <span style={{fontSize:'12px',marginTop:'50px'}}>{p.product.names}
                            <input type="hidden" name="cart" value={p.item}/>
                            </span>  
                            </div>

                            )
                        })} 
                           </div> 
                            <div style={{width:'100px',display:'inline-block',float:'right',paddingLeft:'50px'}}>
                                {total.map((t)=>{
                                    return (
                                <div>         

                                <span style={{marginTop:'50px',fontSize:'12px'}}>RS{t.total}</span>
                               </div>
                            
                            )

                        })}
                            </div>
                             
                              <li class="total">TOTAL <span class="bold">{totale}</span></li>
                               <input type="hidden"  name="cart" value=''/> 
                              <li><input type="radio"  name="payment-method" value="bank" /> Direct Bank Payment
                                <div class="note">
                                    <div class="i fa fa-caret-up"></div>
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                </div>
                            </li>
                            <li><input type="radio" name="payment-method" value="paypal"/> PayPal <img src="images/product-details/paypal.png" alt=""/>

                            </li>
                            <li><button type="submit" class="place-order">Place Order</button></li>
                        </ul>
                        
                           
                       </div>
                       </div>

                    </div>
                     
                </div>
                </form>
               
            </div>
            </section>
    



    
    </>
  )
}

export default Checkout