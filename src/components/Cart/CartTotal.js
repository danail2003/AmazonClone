import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const CartTotal = ({ cartItemsPrice, itemsCount }) => {
    return (
        <Container>
            <Subtotal>
                Subtotal ({itemsCount} items):
                <NumberFormat value={cartItemsPrice} displayType={'text'} thousandSeparator={true} prefix={' $'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
};

export default CartTotal;

const Container = styled.div`
    padding: 20px;
    background-color: white;
    flex: 0.3;
`;

const Subtotal = styled.h2`
    margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    :hover {
        background: #ddb347;
    }
`;