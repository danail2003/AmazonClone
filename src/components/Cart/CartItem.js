import React from 'react';
import styled from 'styled-components';

const CartItem = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={"https://m.media-amazon.com/images/I/61J6uczVvJL._AC_UY327_FMwebp_QL65_.jpg"} alt="product" />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>Apple</h2>
                </CartItemInfoTop>
                <CartItemBottom>
                    <CartItemQuantity>5</CartItemQuantity>
                    <CartItemDelete>Delete</CartItemDelete>
                </CartItemBottom>
            </CartItemInfo>
            <CartItemPrice>$1000</CartItemPrice>
        </Container>
    )
};

export default CartItem;

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
`;

const ImageContainer = styled.div`
    margin-right: 16px;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;

    img {
        object-fit: contain;
        height: 100%;
    }
`;

const CartItemInfo = styled.div`

`;

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`;

const CartItemBottom = styled.div`
    display: flex;
    margin-top: 4px;
`;

const CartItemQuantity = styled.div`

`;

const CartItemDelete = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`;

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`;