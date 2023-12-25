import React,{useState} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import './Navbar.css';

const Menu=()=>(
    <>
       <p><a href="#home">HOME</a></p>
  <p><a href="#wgpt3">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p> 
    </>
)

const Navbar = () => {
    const [toggleMenu, settoggleMenu]=useState(false);
  return (
    <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
    <div className="gpt__navbar-links_logo">
    <img src={logo} alt="logo" />

    </div>

<div className="gpt3__navbar-links_container">
  <Menu />

</div>
    </div>
    <div className="gpt3__navbar-sign">
     <p>Sign In</p>
     <button type="button">Sign Up</button>
    </div>
    <div className="gpt3__navbar-menu">

 {toggleMenu ? 
 <RiCloseLine color="fff" size={27} onClick={()=> settoggleMenu(false)} />
 : <RiMenu3Line color="fff" size={27} onClick={()=>settoggleMenu(true) } />
 }

 {toggleMenu &&(
    <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links-signin">
<Menu />
        </div>
    </div>
 )}
    </div>
    </div>
  )
}

export default Navbar;