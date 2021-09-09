import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = ({ setUser }) => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                let user = res.user;
                let newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                };

                setUser(newUser);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Findianapublicmedia.org%2Fimages%2Fnews-images%2Famazon-logo.jpg&f=1&nofb=1" alt="logo" />
                <h1>Sign into Amazon</h1>
                <LoginButton onClick={signIn}>
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`;

const Content = styled.div`
    padding: 100px;
    background-color: white;
    borger-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`;

const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`;

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`;