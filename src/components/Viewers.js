import React from 'react'
import styled from 'styled-components'
import v1 from '../Assets/viewers-marvel.png'
import v2 from '../Assets/viewers-disney.png'
import v3 from '../Assets/viewers-national.png'
import v4 from '../Assets/viewers-pixar.png'
import v5 from '../Assets/viewers-starwars.png'

import vid1 from '../Assets/Videos/1564676115-marvel.mp4'
import vid2 from '../Assets/Videos/1564674844-disney.mp4'
import vid3 from '../Assets/Videos/1564676296-national-geographic.mp4'
import vid4 from '../Assets/Videos/1564676714-pixar.mp4'
import vid5 from '../Assets/Videos/1608229455-star-wars.mp4'



function Viewers() {
  return (
    <Container>
     <Wrap>
        <img src={v1} alt="1" />
        <video autoplay={true} loop={true} playsInline={true}> 
        <source src={vid1} type='video/mp4'/> 
        </video>
     </Wrap>
     <Wrap>
        <img src={v2} alt="2" />
        <video autoplay={true} loop={true} playsInline={true} src={vid2} type='video/mp4'/>

     </Wrap>
     <Wrap>
        <img src={v3} alt="3" />
        <video autoplay={true} loop={true} playsInline={true} src={vid3} type='video/mp4'/>

     </Wrap>
     <Wrap>
        <img src={v4} alt="4" />
        <video autoplay={true} loop={true} playsInline={true} src={vid4} type='video/mp4'/>

     </Wrap>
    
     <Wrap>
        <img src={v5} alt="5" />
        <video autoplay={true} loop={true} playsInline={true} src={vid5} type='video/mp4'/>

     </Wrap>
    

    </Container>
  )
}



const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));


@media (max-width:768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;


const Wrap = styled.div`
padding-top: 56.25%;
border-radius:10px;
box-shadow:rgb(0,0,0/ 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%)
    0px 16px 10px -10px; 
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    border: 3px solid white;

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s ;
        width: 100%;
        z-index: 1;
        top: 0;
    }
`;


export default Viewers