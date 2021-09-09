import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>Amazon Clone</Container>
    );
};

export default Footer;

const Container = styled.footer`
    background-color: #232F3E;
    color: white;
    padding: 30px 0;
    text-align: center;
    position: sticky;
    height: 100px;
    top: calc( 100vh - 100px );
`;