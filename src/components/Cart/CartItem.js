import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

const CartItem = ({ id, item }) => {
    let options = [];

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}>Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartitems').doc(id).update({
            quantity: parseInt(newQuantity)
        });
    };

    const deleteItem = (e) => {
        e.preventDefault();

        db.collection('cartitems').doc(id).delete();
    };

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} alt="product" />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.title}</h2>
                </CartItemInfoTop>
                <CartItemBottom>
                    <CartItemQuantity>
                        <select onChange={(e) => changeQuantity(e.target.value)} value={item.quantity}>
                            {options}
                        </select>
                    </CartItemQuantity>
                    <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
                </CartItemBottom>
            </CartItemInfo>
            <CartItemPrice>${item.price}</CartItemPrice>
        </Container>
    )
};

export default CartItem;

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
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
    flex-grow: 1;
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
    align-items: center;
`;

const CartItemQuantity = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
    }

    select:focus {
        outline: none;
    }
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