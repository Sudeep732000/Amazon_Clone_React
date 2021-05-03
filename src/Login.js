import React from 'react';
import styled from 'styled-components';
import {auth , provider } from './firebase';

function Login({Setuser}) {
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result) =>{
            let user = result.user;
            let Newuser = {
                name: user.displayName, 
                email: user.email
            }
            Setuser(Newuser);
        }).catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src ="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="Logo" />
                <h1>Login to Amazon </h1>
                <LoginButtton onClick={signIn}>Sign in via Google</LoginButtton>
            </Content>
        </Container>
    )
}
export default Login
 const Container = styled.div`
    width:100%;
    height: 100vh;
    display: grid;
    background-color:black;
    place-items: center;
 `
const AmazonLogo = styled.img`
    height:100px;
    margin-bottom:30px;
`
const LoginButtton = styled.button`
    margin-top: 40px;
    background-color:#f0c14b ;
    border-radius:5px;
    color:white;
    cursor:pointer;
    height: 40px;
    border:2px solid #a88734;
    padding: 4px 8px;

`
const Content = styled.div`
    padding:100px;
    background-color:white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
    h1{
        font-size:30px;
        margin-right:15px;
    }
`
