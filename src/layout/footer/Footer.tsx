import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name> Coded by Alireza Kavousy nezhad </Name>
                <Copyright> All Rights Reserved 2022 </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #24335C;
    min-height: 20vh;
`

const Name = styled.span`

`

const Copyright = styled.small`

`