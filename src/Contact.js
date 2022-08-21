import React from 'react'
import styled from 'styled-components'

const Contact = () => {

  const Wrapper = styled.section`
  padding:9rem 0 5rem 0;
  
  .container{
    margin-top:6rem;
    text-align:center;

    .contact-form{
      max-width:50rem;
      margin:auto;

      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;
      }
    }
  }
  
  `
  return (
   <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.733944198364!2d77.0213062649098!3d28.995253982276157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db06d3f1ae257%3A0x43a8a1d79548564d!2sHaryana%2C%20Sonipat%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1659869496093!5m2!1sen!2sin" 
      width="100%"
       height="450"
        style={{border:0}} 
        allowFullscreen=""
         loading="lazy" 
         className='map'
         referrerPolicy="no-referrer-when-downgrade">
</iframe>
<div className="container">
  <div className="contact-form">
    <form action="https://formspree.io/f/xgedgjkr" method='POST' className='contact-inputs'>
      <input type="text" name='username' placeholder='username' autoComplete='off'required/>
      <input type="email" name='Email' placeholder='Email' autoComplete='off'required/>
    <textarea name="message" cols="30" rows="6"  autoComplete='off'required></textarea>
 <input type="submit" value='send' />
    </form>
  </div>
</div>
   </Wrapper>
  )
}

export default Contact
