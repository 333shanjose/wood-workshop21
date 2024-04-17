import React, { useEffect,useState } from 'react'
import Adminnav from './Adminnav'
import axios from 'axios'

function Orderdetails() {
    const [products,setProducts]=useState([])
    const [total,setTotal]=useState('')
    const [url,setUrl]=useState('')


    useEffect(()=>{
        
      setUrl(window.location.origin)

      axios.get(url+'/cart-pages').then((res)=>{
           setProducts(res.data.cart)
           console.log(products)

      })
      axios.get(url+'/totals').then((res)=>{
            console.log(res)
            setTotal(res.data)
        })
     
    })
  return (
    <>
    <Adminnav/>

     <table class="table  table-striped table-bordered" style={{marginLeft:'170px',marginTop:'100px'}}>
     <thead>
    <tr style={{marginLeft:'100px'}}>
      <th scope="col">PRODUCT</th>
      <th scope="col">PRICE</th>
      <th scope="col">QTY</th>

    </tr>
  </thead>
  <tbody>
  {products.map((p)=>{

      return (
     <tr>
      
      <th scopr="row">
      <img src={'/images/'+p.product.filename} alt='' style={{width:'30px',height:'30px'}}/>
      <span>{p.product.names}</span>
      </th>
      <td>{p.product.price}</td>
      <td>{p.quantity}</td>
       
     </tr>
          )
        })}
        
  </tbody>

  </table>
  <div style={{marginLeft:'1000px',marginTop:'100px'}}> 
    <span style={{fontSize:'20px'}}>total</span>
    <span style={{paddingLeft:'120px',fontSize:'20px'}}>{total}</span>
  </div>


    </>
  )
}

export default Orderdetails
