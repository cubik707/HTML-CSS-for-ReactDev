import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type InfoBlockPropsType = {
    title: string
}

export const InfoBlock = (props: InfoBlockPropsType) => {
    return (
        <StyledInfoBlock>
            <Title>{props.title}</Title>
            <FlexWrapper gap = {"10px"}>
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

const Title = styled.h3`
    font-size: 20px;
    font-weight: 500;
    line-height: 136%;
    color: ${theme.colors.fontDark};
    margin-bottom: 10px;
`

const Image = styled.img`
    width: 330px;
    height: 192px;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(217, 217, 217);
    border-radius: 9px;
`
