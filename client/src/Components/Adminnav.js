import React, { useEffect,useState } from 'react'
import Adminhead from './Adminhead'
import './Adminnav.css'
import { useNavigate} from 'react-router-dom';

import axios from 'axios'
function Adminnav() {
  const [admin,setAdmin]=useState({})
  const navigate = useNavigate();
  const [url,setUrl]=useState('')

   useEffect(()=>{
    setUrl(window.location.origin)

          axios.post(url+'/admin/loginnn',{withCredentials:true}).then((res)=>{
             if(res.data.adminss){
              setAdmin(res.data.adminss)

             }else{
               navigate('/admin/login')
             }

          }) 
           
       
       
   })
    
  return (

    <>
      <Adminhead/>

    <div class="layout-page">
       <div class="header-section">
       <div class="menu-right">
       <ul class="notification-menu">
       <li class="">
       <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
         <img src="" alt="" />  
             {admin.name}                 
         <span class="caret"></span>
         </a>             
		 <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
          <li><a href="/admin/login">
            <i class="fa fa-user"></i> <span>Change Password</span></a></li>
 
							
        <li><a href="/admin/logout"><i class="fa fa-sign-out"></i> <span>Log Out</span></a></li>
        </ul>				
        </li>         
                    

                </ul>
            </div>

    </div>
    </div>
    </>
  )
}

export default Adminnav