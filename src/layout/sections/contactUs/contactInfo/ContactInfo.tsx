import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type ContactInfoPropsType = {
    src: string
    alt?: string
    name: string
    info: string
}

export const ContactInfo = (props: ContactInfoPropsType) => {
    return (
        <StyledContactInfo>
            <Image src={props.src} alt={props.alt}/>
            <FlexWrapper direction={"column"}>
                <Name>{props.name}</Name>
                <Info>{props.info}</Info>
            </FlexWrapper>
        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.div`
    display: flex;
    gap: 26px;
`

const Image = styled.img`
    width: 38px;
    height: 38px;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 136%;
    color: ${theme.colors.fontDark}
`

const Info = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 136%;
    color: #8B8B8B;
`