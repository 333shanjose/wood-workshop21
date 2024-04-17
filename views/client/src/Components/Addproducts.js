import React, { useEffect,useState } from 'react'
import Adminnav from './Adminnav'

function Addproducts() {
  const [url,setUrl]=useState('')
  useEffect(()=>{
    setUrl(window.location.origin)
      

  })
  return (
    <>

    <form  action={url+'/admin/addproduct'} method="post" enctype="multipart/form-data" style={{paddingLeft:"100px",paddingTop:"30px",marginTop:'50px',marginLeft:"300px"}}>
    <div>
    <label>Name</label>
        <input type="text" name="names"/>
      
    </div>
    
    <div style={{paddingTop:'20px'}}>
    <label>Price</label>
        <input type="number" name="price"/>

    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Description</label>
        <input type="text" name="description"/>
    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Images</label>
        <input type="file" name="image"/>
    </div>
    
    
    <div style={{paddingTop:'20px'}}>
    <button type="submit">submit</button>
    </div>
    </form>
    
    
    </>
  )
}

export default Addproducts