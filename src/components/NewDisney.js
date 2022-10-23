import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

import rec1 from '../Assets/aladin.jpg'
import rec2 from '../Assets/saxuke.jpg'
import rec3 from '../Assets/itachi.jpg'
import rec4 from '../Assets/brock.jpg'

const NewDisney = (props) => {
  return (
    <Container>
    <h3>New Disney+ Series</h3>
      <Content>
      <Wrap>
        <Link to="/">
            <img src={rec1} alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/">
            <img src={rec2} alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/">
            <img src={rec3} alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/">
            <img src={rec4} alt="" />
        </Link>
      </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
padding: 0 0 26px;
`;
const Content = styled.div`
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(4,minmax(0,1fr));

@media (max-width:768px) {
    grid-template-columns: repeat(2, minmax(0,1fr));
}

`;
const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0 /72%)
    0px 16px 10px -10px; 
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249,249,249,0.4);

img{
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
}

&:hover{
    box-shadow:rgb(0,0,0/ 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%)
    0px 30px 22px -10px; 
    transform: scale(1.05);
    border-color:rgba(249,249,249,0.8) ;
}
`;


export default NewDisney;
