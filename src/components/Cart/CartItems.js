import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = () => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                <CartItem />
            </ItemsContainer>
        </Container>
    )
};

export default CartItems;

const Container = styled.div`
    margin-right: 18px;
    padding: 20px;
    height: 300px;
    background-color: white;
    flex: 0.8;
`;

const Title = styled.h2`

`;

const ItemsContainer = styled.div`

`;
