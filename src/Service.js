import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useGlobalContext } from "./context";

const Service = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Products</h2>
      <div className="container grid grid-three-column">
        {services.map((curElement) => {
          return (
            <div key={curElement.id} className="card">
              <figure>
                <img src={curElement.image} alt={curElement.name} />
              </figure>
              <div className="card-data">
              <h3>{curElement.category}</h3>
                <p>$  {curElement.price}</p>
               
                <NavLink to="/service">
                  <button className="read-btn">Add Products</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
padding:9rem 0;
background-color:${({theme}) =>theme.colors.bg};

.container{
  max-width:100rem;
}
.card{
  border-radius:5px;
  box-shadow:0 0 5px grey;
}
.card-data{
padding:0 2rem;
display:block;
text-align:center;

text-transform:uppercase;
}
figure{
  width:auto;
  display:flex;
  justify-content:center;
  overflow:hidden;
 }
 img{
  max-width:90%;
  margin-top:1.5rem;
  height:25rem;
  
}

  .read-btn{
    margin:2rem auto;
    background-color:rgb(0 0 0 / 0%);
    border:0.1rem solid rgb(98 84 243);
    color:rgb(98 84 243);
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .read-btn:hover{
    background-color:rgb(98 84 243);
    color:white;
  }
  @media (max-width:998px) {
    .grid{
      gap: 3.2rem;
    }
    .grid-three-column{
      grid-template-columns:1fr 1fr;
    }
  }

  @media (max-width:768px) {
    .grid-two-column, .grid-three-column{
      grid-template-columns: 1fr;
    }
  }
`;
export default Service;
