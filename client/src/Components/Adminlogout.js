import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

function Adminlogout() {
  const navigate = useNavigate();
  const [url,setUrl]=useState('')

    useEffect(()=>{
      setUrl(window.location.origin)

        axios.post(url+'/admin/logout',{withCredentials:true}).then((res)=>{
            console.log(res)

          navigate('/admin/login')
        })
    })
  return (
    <>
    
    </>
        
        
        
  )
}

export default Adminlogout