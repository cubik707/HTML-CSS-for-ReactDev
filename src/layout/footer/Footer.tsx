import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import wave from "../../assets/images/wave.webp";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Name> Coded by Alireza Kavousy nezhad </Name>
                    <Copyright> All Rights Reserved 2022 @</Copyright>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 130px 0 75px 0;
    background-color: ${theme.colors.primaryBgDark};
    background-image: url(${wave});
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: ${theme.colors.fontDark};
`

const Copyright = styled.small`
    font-size: 10px;
    font-weight: 100;
    line-height: 19px;
    
`