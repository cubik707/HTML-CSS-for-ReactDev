import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";


type ProgramPropsType = {
    src: string
    alt?: string
    title: string
}

export const Program = (props: ProgramPropsType) => {
    return (
        <StyledProgram>
            <FlexWrapper direction="column">
                <ProgramIcon src={props.src} alt={props.alt}/>
                <ProgramTitle>{props.title}</ProgramTitle>
            </FlexWrapper>
        </StyledProgram>
    );
};

const StyledProgram = styled.div`

`

const ProgramIcon = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    border: 10px solid rgba(34, 34, 34, 1.0);
`

const ProgramTitle = styled.span`

`