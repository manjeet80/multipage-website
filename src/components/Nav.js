import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {CgMenu,CgClose} from 'react-icons/cg'

const Nav = () => {

    const [isMenu, setIsMenu] = useState(false)
    const Nav = styled.nav`
    .navbar-list{
        display:flex;
      gap:4.5rem;
      
  .navbar-link{
         display:inline-block;
         font-size:1.8rem;
         color:${({theme})=>theme.colors.black};
        font-weight:500;
        text-transform:uppercase;
        transition:color 0.3s linear;
      }
      
       .navbar-link:hover{
        color:${({theme}) =>theme.colors.helper}
      }
    }
    .mobile-navbar-btn{
        display:none;
    
        .close-outline{
            display:none;
        }
    }
    .mobile-navbar-btn [name='close-outline']{
        display:none;
    }
@media (max-width:${({theme}) => theme.media.mobile}){
.mobile-navbar-btn{
    display:inline-block;
    z-index:999;

.mobile-nav-icon{
    font-size:4.2rem;
     }
  }
  .navbar-list{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:#fff;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    transform:translateX(100%);

    visibility:hidden;
    opacity:0;

    .navbar-link{
     font-size:3.2rem;
    }
    .navbar-link:hover{
        color:${({theme}) =>theme.colors.helper}
      }
  }
  .active .mobile-nav-icon{
    display:none;
    font-size:4.2rem;
    position:absolute;
    top:3%;
    right:10%;
    z-index:9999;
  }
  .active .close-outline{
    display:inline-block;
  }
  .active .navbar-list{
    visibility:visible;
    opacity:1;
    transform:translateX(0);
    z-index:999;
  }
}
    `

  return (
    <Nav>
        <div className={isMenu ? "menuIcon active" : "menuIcon"}>
            <ul className="navbar-list">
                <li>
                    <NavLink className='navbar-link' onClick={() =>setIsMenu(false)} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' onClick={() =>setIsMenu(false)} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' onClick={() =>setIsMenu(false)} to='/service'>Services</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' onClick={() =>setIsMenu(false)} to='/contact'>Contact</NavLink>
                </li>
            </ul>
            <div className="mobile-navbar-btn">
                <CgMenu name='menu-outline' className='mobile-nav-icon'onClick={() =>setIsMenu(true)}/>
                <CgClose name='close-outline' className='close-outline mobile-nav-icon'onClick={() =>setIsMenu(false)}/>
            </div>
        </div>
    </Nav>
  )
}



export default Nav
