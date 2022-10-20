import styled from 'styled-components'
import logo from '../Assets/logo-one.svg'
import logo2 from '../Assets/cta-logo-two.png'
import bg from '../Assets/login-background.jpg'
// import bg from '../../public/images/login-background.jpg'
const Login = (props)=>{  
 return(
 <Container>
    <Content>
    <CTA>
    <CTALogoOne src={logo} alt="" />
    <SignUp>GET ALL THERE</SignUp>
    <Description>Get Premier access to Raya and the Last Dragon with a Disney+ Subscription. As of 03/26/2021, and The Disney Bundle will increase by $1</Description>
    <CTALogoTwo src ={logo2} alt='logo2'/> 
    </CTA>
        {/* <BgImage/> */}

        
    </Content>
    <BgImage/>
  </Container>
 )
}
const Container = styled.section`
position:relative;
overflow:hidden;
display:flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`
const BgImage = styled.div`
height: 100%;
width:100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${bg});
position: absolute;
top: 0;
right: 0;
left: 0;
z-index:-1;
`;
const CTA = styled.div`
/* margin-bottom: 2vw;

flex-wrap: wrap;

justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;*/
 width: 100%;  
 max-width:650px;
 display:flex;
flex-direction: column;
`;
const CTALogoOne = styled.img`

margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;

`;
const SignUp = styled.a`
font-weight: bold;
color: white;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;
&:hover{
  background-color: #0483ee;

}
`;
const Description = styled.p`
color:hsla(0,0%,95.3%,1.0);
font-size: 11px;
margin: 0,0,24px;
line-height: 1.5;
letter-spacing: 1.5px;

`;
const CTALogoTwo = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
export default Login;