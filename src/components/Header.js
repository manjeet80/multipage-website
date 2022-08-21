import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
  return (
   <MainHeader>
    <NavLink to='/'>
 <h5>Manjeet</h5>
    </NavLink>
      <Nav/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
background-color:${({theme}) => theme.colors.bg};
height:8rem;
padding:0 5rem;

h5{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-transform:uppercase;
    letter-spacing: 2.5rem;
    font-size:13px;
    background-color:${({theme})=>theme.colors.black};
    color:white;
    padding:7px 10px;
    font-weight:700;
    border-radius:2px;
   
}
`

export default Header
