import React, { useEffect,useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import axios from 'axios'
import Adminnav from './Adminnav'
import { useNavigate} from 'react-router-dom';

function Adminedit(props) {
    const location=useLocation()
    const navigate = useNavigate();

   const propsdata=location.state
   const [products,setProducts]=useState({})
   const [url,setUrl]=useState('')

   function Login(event){
    event.preventDefault()
    console.log(event.target.elements.image.files[0])
    const data = new FormData() ;
    data.append('image',event.target.src);
    axios.post(url+'/admin/editproducts/'+propsdata,{
      names:event.target.elements.names.value,
      price:event.target.elements.price.value,
      description:event.target.elements.description.value,
      image:event.target.elements.image.files[0].name

  },{withCredentials:true}).then((res)=>{
        navigate('/admin')
      
   })
  }
     
   function changeImage(e){
    document.getElementById('imageView').src=URL.createObjectURL(e.target.files[0])
    
   }
   const handleChange = e => {
    setProducts({
    
       names:e.target.value,
       
    })
  }
  const handleChange1 = e => {
    setProducts({
    
       price:e.target.value,
       
    })
  }
  const handleChange2 = e => {
    setProducts({
    
      description:e.target.value,
    
       
    })
  }
          useEffect(()=>{
            
            setUrl(window.location.origin)


            axios.post(url+'/admin/editproductss/'+propsdata,{withCredentials:true}).then((res)=>{
              setProducts(res.data.products)
              console.log(res.data.products)

            
              
        })

      },[])
  
      
  return (
    <>
     <Adminnav/>
      <form  onSubmit={Login}  enctype="multipart/form-data"  style={{paddingLeft:"30px",paddingTop:"30px",marginTop:'50px',marginLeft:"300px"}}>
    <div>
    <label>Name</label>
        <input type="text" name="names"  value={products.names} onChange={handleChange}  />
      
    </div>
    
    <div style={{paddingTop:'20px'}}>
    <label>Price</label>
        <input type="number" name="price" value={products.price} onChange={handleChange1}/>

    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Description</label>
        <input type="text" name="description" value={products.description} onChange={handleChange2}/>
    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Images</label>
    
    <img src={'/images/'+products.filename} id='imageView'  style={{width:'30px',height:'30px',marginBottom:'10px'}}/>
    
        <input type="file" name="image"     onChange={changeImage}/>
    </div>
    
    
    <div style={{paddingTop:'20px'}}>
    <button type="submit">submit</button>
    </div>
    </form>
     
    
    </>
  )
}

   
export default Adminedit