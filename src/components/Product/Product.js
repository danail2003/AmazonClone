import React from 'react';
import styled from 'styled-components';

const Product = () => {
    return (
        <Container>
            <Title>
                Apple iPhone 12 Pro, 128GB, Gold - Fully Unlocked (Renewed)
            </Title>
            <Price>
                $1,000.00
            </Price>
            <Rating>
                ⭐⭐⭐⭐⭐
            </Rating>
            <Image src="https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_SX679_.jpg" />
            <ActionSection>
                <AddToCartButton>
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
`;