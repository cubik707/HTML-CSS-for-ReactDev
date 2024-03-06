import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/Menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #809dff;
    display: flex;
    justify-content: space-between;
`
