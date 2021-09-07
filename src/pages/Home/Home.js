import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../../components/Product/Product';
import { db } from '../../firebase';

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempData = [];

            tempData = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }));

            setProducts(tempData);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data) => {
                        return (
                            <Product key={data.id}
                                id={data.id}
                                title={data.product.title}
                                price={data.product.price}
                                rating={data.product.rating}
                                image={data.product.image}
                            />
                        )
                    })
                }
            </Content>
        </Container>
    )
};

export default Home;

const Container = styled.div`
    max-width: 1550px;
    margin: 0 auto;
`;

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index: 100;
    display: flex;
`;