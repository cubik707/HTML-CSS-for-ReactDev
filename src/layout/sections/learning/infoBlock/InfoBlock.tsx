import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type InfoBlockPropsType = {
    title: string
}

export const InfoBlock = (props: InfoBlockPropsType) => {
    return (
        <StyledInfoBlock>
            <Title>{props.title}</Title>
            <FlexWrapper>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </FlexWrapper>
        </StyledInfoBlock>
    );
};

const StyledInfoBlock = styled.div`
    width: 100%;
`

const Title = styled.span`

`

const Image = styled.img`
    width: 330px;
    height: 192px;
    background-color: #D9D9D9;
`
