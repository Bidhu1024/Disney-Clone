import styled from "styled-components";
import Logo1 from "../Assets/Logo1.svg";
import HomeLogo from "../Assets/Home-icon.svg";
import Search from "../Assets/Search.svg";
import WatchList from "../Assets/WatchList.svg";
import Originals from "../Assets/Original.svg";
import Series from "../Assets/Series.svg";
import Movies from "../Assets/Movies.svg";
import { auth, provider } from "../firebase";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";
const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName)  
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        setUser(user)
        navigate("/home");
      }
    })
  },[username])
  
  const handleAuth = () => {
    if(!username){
      auth
      .signInWithPopup(provider)
      .then((result) => {
       setUserLoginDetails(result.user)
      })
      .catch((error) => {
        alert(error.message);
      });
    }else if(username){
      auth.signOut().then(()=>{
        dispatch(setSignOutState())
        navigate("/")
      }).catch((err)=> alert(err.message)
    )}
    
  };

  const setUser = (user)=>{
    dispatch(setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo: user.photoURL,

    }))
  }
  console.log(username)
  return (
    <Nav>
      <img
        src={Logo1}
        alt="disney"
        width="80px"
        max-height="70px"
        font-size="0"
      />
      { !username ? (
      <Login onClick={handleAuth}>Login</Login>
       ) : (
        <>
          <NavMenu>
        <a href="/home">
          <img src={HomeLogo} alt="a" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src={Search} alt="a" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src={WatchList} alt="a" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src={Originals} alt="a" />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img src={Movies} alt="a" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src={Series} alt="a" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
      <UserImg src={userPhoto}/>
      <DropDown>
        <span onClick={handleAuth}>

          SignOut
        </span>
      </DropDown>
      </SignOut>
      </>
    )}
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.1rem;
  letter-spacing: 1rem;
  z-index: 3;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.4px;
      line-height: 1.08px;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: " ";
        opacity: 0;
        height: 3px;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }

    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;
const UserImg = styled.img`
height: 100%;

`;
const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0;
background:black;
border: 1px solid rgba(151,151,151,0.3);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size:14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`
const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

${UserImg}{
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
&:hover{
  ${DropDown}{
    opacity: 1;
    transition-duration:1s ;
  }
}
`

export default Header;