import React, { useEffect, useState } from 'react'
import axios from 'axios';
import $ from 'jquery'
import "datatables.net-dt"
import Adminnav from './Adminnav';
function Orderlist() {
  const [order,setOrder]=useState([])
  const [url,setUrl]=useState('')


  useEffect(()=>{
    setUrl(window.location.origin)

    axios.get(url+'/place-order').then((orders)=>{
      setOrder(orders.data.order)
      console.log(order)
     })
    
     setTimeout(function(){
      $('#examples').DataTable() 
     } ,1000);
    
   
   
   
   
   
   
   })
 

      
  
    

  
return(
 <>
 <Adminnav/>
<div style={{marginLeft:'200px',marginTop:'100px'}}>
  <table id="examples" class="display"> 
<thead> 
    <tr> 
    <th>Date</th> 
    <th>Customers</th> 
    <th>Payment</th> 
    <th>Method</th> 

    </tr> 
</thead> 
  
<tbody> 
    {order.map((o)=>{
        return (
      <tr> 

        <td>{o.date}</td> 
        <td>{o.name}</td> 
        <td>{o.status}</td> 
        <td>{o.method}</td> 

    </tr>
        )
    })}
    </tbody>
     
    </table>
  </div>  

 </>
 )
    

  
  
}

 
  

    
 

export default Orderlist