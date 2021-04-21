import React,{useState,useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=>{
            window.removeEventListener("scroll",transitionNavBar);
        }
    },[])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
         <div className="nav__container">
             
          <img
          className="nav__logo"
           src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"  alt=""/>
         
           <img 
           className="nav__avatar"
           src="http://bootstrap-material-ui.exentriq.com/assets/img/doc/avatar/avatar_0.jpg" alt=""/>
        
         </div>

        </div> 
    )
}

export default Nav
