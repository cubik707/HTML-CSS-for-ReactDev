import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {LightDarkMode} from "../../components/LightDarkMode/LightDarkMode";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home", "Projects", "About", "Content"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <FlexWrapper align={"center"}>
                        <HeaderMenu menuItems={items}/>
                        <LightDarkMode/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBgDark};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
`
