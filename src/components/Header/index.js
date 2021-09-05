import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = () => {
    return (
        <div>
            <Container>
            <HeaderLogo>
                <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo" />
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderInput type="text"></HeaderInput>
                <SearchIcon />
            </HeaderSearch>
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

`;

const OptionLineOne = styled.div`

`;

const OptionLineTwo = styled.div`

`;

const HeaderSearch = styled.div`

`;

const HeaderInput = styled.input`

`;