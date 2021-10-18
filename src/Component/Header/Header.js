import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {

    const [NavStatus, setNavStatus] = useState(false)
    return (
        <Container>
            <a href=""><img src="./images/logo.svg" alt="" /></a>
            <Menu>
                <a href="">Model s</a>
                <a href="">Model 3</a>
                <a href="">Model x</a>
                <a href="">Model y</a>
            </Menu>
            <RightMenu>
            <a href="">Shop</a>
            <a href="">Tesla Accound</a>
            <IconMenu onClick={() =>setNavStatus(true)} />
            </RightMenu>
            <Nav show={NavStatus}>
                <Close onClick={() =>setNavStatus(false)} />
     <li><a href="#">Existing Inventory</a></li>
     <li><a href="#">Used Inventory</a></li>
     <li><a href="#">Trade-in</a></li>
     <li><a href="#">Cybertruck</a></li>
     <li><a href="#">Roadaster</a></li>
     <li><a href="#">Existing Inventory</a></li>
     <li><a href="#">Existing Inventory</a></li>
     <li><a href="#">Existing Inventory</a></li>

      
            </Nav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content : space-between;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    z-index: 1;
`
const Menu = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
      font-widh: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-widh: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
`
const IconMenu = styled(MenuIcon)`
   cursor: pointer;
`
const Nav = styled.div`
   position: fixed;
   top:0;
   bottom:0;
   right:0;
   background: white;
   width: 300px;
   list-style: none;
   padding:20px;
   z-index:16;
   display:flex;
   flex-direction: column;
   text-align: start;
   transform: ${props => props.show ? 'translateX(0)' :  'translateX(100%)'};
   transition: transform 0.3s ease-in; 
   li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0,0,0,.2);
       a{
           font-weight: 600;
       }
   }
`
const Close = styled(CloseIcon)`
top:0;
margin-left: auto;
cursor:pointer;
`

