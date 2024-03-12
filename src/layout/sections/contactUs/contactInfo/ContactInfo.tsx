import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
            <FlexWrapper>
                <Name>{props.name}</Name>
                <Info>{props.info}</Info>
            </FlexWrapper>
        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 38px;
    height: 38px;
`

const Name = styled.span`

`

const Info = styled.span`

`