import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

const Product = ({ title, price, rating, image, id }) => {
    const addToCart = () => {
        const cartItem = db.collection('cartitems').doc(id);
        cartItem.get()
            .then((doc) => {
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                }
                else {
                    db.collection('cartitems').doc(id).set({
                        title,
                        image,
                        price,
                        quantity: 1
                    })
                }
            })
    };

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(r => <span>⭐</span>)
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
};

export default Product;

const Container = styled.div`
    background-color: white;
    max-height: 400px;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`

`;

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`;

const Rating = styled.div`

`;

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddToCartButton = styled.button`
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
    cursor: pointer;
`;