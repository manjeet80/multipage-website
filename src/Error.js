import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
   <Wrapper>
    <img src="./images/error.svg" alt="" />
    <NavLink to='/'>
    <button className='btn'>Go Back</button>
    </NavLink>
   </Wrapper>
  )
}
 const Wrapper = styled.section`
 padding:9rem 0;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 
 .btn{
    margin-top:3rem;
 }
 `
export default Error
