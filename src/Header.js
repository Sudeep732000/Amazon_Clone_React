import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

function Header({ user }) {
    return (
        <Container>
            <Headerlogo>
                <Link to = "/">
                <img src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"} alt = "Logo"/>
                </Link>
            </Headerlogo>
            <HeaderOption>
                <LocationOnIcon />
                <HeaderOptions>
                    <OptionOne>Hello!</OptionOne>
                    <OptionTwo>Select Your Address</OptionTwo>
                </HeaderOptions>
            </HeaderOption>
            <SearchOption>
                <Search type='text'/>
                <SearchImage>
                    <SearchIcon/>
                </SearchImage>
            </SearchOption>
            <HeaderNavs>
                <HeaderOptions>
                    <OptionOne>Hello!{user.name}</OptionOne>
                    <OptionTwo> Accounts</OptionTwo>
                </HeaderOptions>
                <HeaderOptions>
                    <OptionOne>Returns</OptionOne>
                    <OptionTwo> & Orders</OptionTwo>
                </HeaderOptions>
                    <HeaderCart>
                        <Link to="/ShopCart">
                            <ShoppingCartOutlinedIcon />
                        </Link>    
                    </HeaderCart>
            </HeaderNavs>

        </Container>
    )
}

export default Header
const Container = styled.div`
    height:70px;
    z-index:1;
    top:0;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
`
const Headerlogo = styled.div`
   img
   {
       width:120px;
       border-radius:5px;
       object-fit:contain;
       margin-left:10px;
       margin-top:10px;
   }

`
const HeaderOption = styled.div`
   padding-left:15px;
   display: flex;
   align-items:center;
`
const OptionOne = styled.div`
   font-weight: 200;
`
const OptionTwo = styled.div`
   font-weight:700;
`
const SearchOption = styled.div`
   display:flex;
   flex-grow:1;
   margin-left:9px;
   background-color:#febd69;
   :focus-within{
       box-shadow: 0 0 0 3px #F90;
       border radius:5px;
   }
`
const Search = styled.input`
   flex-grow:1;
   border:0;
   :focus{
       outline:none;
   }
   height:32px;
   overflow:hidden;
   
` 
const SearchImage = styled.div`
   background-color:#febd69;
   width:50px;
   color: black;
   display:flex;
   justify-content:center;
   align-items:center;
   height: 35px;
   border-radius:5px;
   margin-right:5px;
`
const HeaderNavs = styled.div`
   display:flex;
`
const HeaderOptions = styled.div`
   padding: 10px 10px 10px 10px;
   cursor:pointer;
`
const HeaderCart = styled.div`
   padding-top: 20px;
   margin-right:5px;
   a{
       color: white;
   }
`