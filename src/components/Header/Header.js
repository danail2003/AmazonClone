import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

const Header = () => {
    const [cartItems, setCartItems] = useState([]);
    let count = 0;

    const getCount = () => {
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
        getCount();
    }, []);

    cartItems.forEach((item) => {
        count += item.product.quantity;
    });

    return (
        <div>
            <Container>
                <HeaderLogo>
                    <Link to="/">
                        <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo" />
                    </Link>
                </HeaderLogo>
                <HeaderOptionAddress>
                    <LocationOnIcon />
                    <OptionsLine>
                        <OptionLineOne>Hello,</OptionLineOne>
                        <OptionLineTwo>Select your address</OptionLineTwo>
                    </OptionsLine>
                </HeaderOptionAddress>
                <HeaderSearch>
                    <HeaderInput type="text"></HeaderInput>
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>
                </HeaderSearch>
                <HeaderNavItems>
                    <HeaderOptions>
                        <OptionLineOne>Hello, Danail</OptionLineOne>
                        <OptionLineTwo>Account & Lists</OptionLineTwo>
                    </HeaderOptions>
                    <HeaderOptions>
                        <OptionLineOne>Returns</OptionLineOne>
                        <OptionLineTwo>& Orders</OptionLineTwo>
                    </HeaderOptions>
                    <HeaderOptionCart>
                        <Link to="/cart">
                            <ShoppingBasketIcon />
                            <CartCount>{count}</CartCount>
                        </Link>
                    </HeaderOptionCart>
                </HeaderNavItems>
            </Container>
        </div>
    )
};

export default Header;

const Container = styled.div`
    height: 60px;
    background-color: #131921;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
        background-color: #131921;
    }
`;

const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
    padding-left: 9px;
`;

const OptionsLine = styled.div`
    padding-left: 5px;
`;

const OptionLineOne = styled.div`

`;

const OptionLineTwo = styled.div`
    font-weight: 700;
`;

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    margin-right: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`;

const HeaderInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }
`;

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderNavItems = styled.div`
    display: flex;
`;

const HeaderOptions = styled.div`
    padding: 10px 9px 10px 9px;
`;

const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;
    a {
        display: flex;
        color: white;
        text-decoration: none;
    }
`;

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`;