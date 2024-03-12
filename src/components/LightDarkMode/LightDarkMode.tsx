import React from 'react';
import moon from "../../assets/images/moon.webp"
import styled from "styled-components";

export const LightDarkMode = () => {
    return (
        <div>
            <StyledMoonButton>
                <StyledMoon src={moon} alt = "light-dark-mode"/>
            </StyledMoonButton>
        </div>
    );
};

const StyledMoon = styled.img`
    width: 36px;
    height: 37px;
`

const StyledMoonButton = styled.button`
    border: none;
    background-color: transparent;
`