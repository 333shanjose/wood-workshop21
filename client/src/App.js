import './App.css'
import { BrowserRouter, Route, Routes, useFetcher } from "react-router-dom";
import Home from './Pages/Home';
import Addproducts from './Components/Addproducts';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Orderlist from './Components/Orderlist';
import Adminhead from './Components/Adminhead';
import Adminnav from './Components/Adminnav';
import Shope from './Pages/Shope';
import Contact from './Pages/Contact';
import Landingpage from './Pages/Landingpage';
import About from './Pages/About';
import Service from './Pages/Service';
import Service2 from './Pages/Service2';
import Product from './Pages/Product';
import Orderdetails from './Components/Orderdetails';
import Adminsignup from './Components/Adminsignup';
import Adminlogin from './Components/Adminlogin';
import Adminlogout from './Components/Adminlogout';
import Adminedit from './Components/Adminedit';
function App() {
  
    

 
  return (
    <>
    <BrowserRouter>
       <Routes>
       <Route path="/admin" element={<Admin/>} />

        <Route path="/" element={<Home/>} />        

        <Route path="/contact" element={<Contact />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/services-2" element={<Service2/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/shop" element={<Shope/>} />
        
        <Route path="/admin/signup" element={<Adminsignup/>} />     
        <Route path="/admin/login" element={<Adminlogin/>} />     
        <Route path="/admin/logout" element={<Adminlogout/>} />     

        <Route path="/admin/addproducts" element={<Addproducts/>} />
        <Route path="/admin/orderlist" element={<Orderlist/>} />
        <Route path="/admin/orderdetails" element={<Orderdetails/>} />
        <Route path="/admin/editproducts" element={<Adminedit/>} />


        <Route path="/cart" element={<Cart/>} />

        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/adminhead" element={<Adminhead/>} />     
        <Route path="/adminnav" element={<Adminnav/>} />     





     
             




        

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
