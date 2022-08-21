import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/">
              <button className="get-started">Get Started</button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>MultiPage Website</h3>
            <p>Lorem ipsum dolor, sit amet consectetur mollitia!</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                className="email-input"
                placeholder="Email"
                autoComplete="off"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCpXjzR-Q0RK7z8HWv5iS51w"
                  target="_blank" rel="noreferrer"
                >
                  {" "}
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 123459875</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
           <hr />
           <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Technical. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
           </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform:translateY(50%);
  }
  .get-started {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .email-input{
      margin-bottom:2rem;
    }
    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 10px;
        border-radius:50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom-section{
      padding:9rem 0;

      hr{
        margin-bottom:2rem;
        height:0.1px;
        color:${({theme}) =>theme.colors.hr}
      }
    }
  }

  @media (max-width:768px) {
    .contact-short{
      max-width:95vw;
      padding:2rem 0;
      display:flex;
      justify-content:center;
      align-items:center;
      }
      .get-started{
        text-align:center;
        justify-self:flex-start;
      }
      footer .footer-bottom-section{
        padding-top:1rem;
      }
  }
`;
export default Footer;
