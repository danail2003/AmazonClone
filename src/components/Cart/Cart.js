import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const getCartItems = () => {
        db.collection('cartitems').onSnapshot((snapshot) => {
            let tempData = [];

            tempData = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data(),
            }));

            setCartItems(tempData);
        });
    };

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal />
        </Container>
    )
};

export default Cart;

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
`;