import React ,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
 const [show, handleshow] = useState(false);

 const transtionNavBar =()=>{
     if (window.scrollY>100){
         handleshow(true)}
         else{
             handleshow(false)
         }
     };
     useEffect(() => {
         window.addEventListener("scroll",transtionNavBar);
         return () => 
             window.removeEventListener("scroll",transtionNavBar)
         
     }, []);
 
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">

           
            <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            
            <img className="nav_avatar" src ="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
            
            </div>
        </div>
    )
}

export default Nav
