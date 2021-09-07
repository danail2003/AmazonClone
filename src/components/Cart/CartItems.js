import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = ({ cartItems }) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item) => (
                        <CartItem
                            id={item.id}
                            item={item.product} />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
};

export default CartItems;

const Container = styled.div`
    margin-right: 18px;
    padding: 20px;
    background-color: white;
    flex: 0.8;
`;

const Title = styled.h2`
    padding-bottom: 8px;
`;

const ItemsContainer = styled.div`

`;
