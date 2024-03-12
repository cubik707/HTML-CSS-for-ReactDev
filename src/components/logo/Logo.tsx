import React from 'react';
import logo from "../../assets/images/logo.webp";
import styled from "styled-components";

export const Logo = () => {
    return (
        <a href="">
            <StyledLogo src={logo} alt="logo"/>
        </a>
    );
};

const StyledLogo = styled.img`
    width: 79px;
    height: 79px;
`