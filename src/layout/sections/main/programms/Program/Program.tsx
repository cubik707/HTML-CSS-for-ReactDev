import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme";


type ProgramPropsType = {
    src: string
    alt?: string
    title: string
}

export const Program = (props: ProgramPropsType) => {
    return (
        <StyledProgram>
            <ProgramIcon src={props.src} alt={props.alt}/>
            <ProgramTitle>{props.title}</ProgramTitle>
        </StyledProgram>
    );
};

const StyledProgram = styled.div`
    position: relative;
    width: 161px;
    height: 90px;
    
    background-color: ${theme.colors.accentBgDark};
    border-radius: 24px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

const ProgramIcon = styled.img`
    box-sizing: content-box;
    position: absolute;
    top: -40px;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    border: 10px solid rgba(34, 34, 34, 1.0);
`

const ProgramTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`