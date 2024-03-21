import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type ServicePropsType = {
    iconId: string
    text: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction={"column"} justify={"center"} gap={"30px"}>
                <Icon width={"73px"} height={"73px"} viewBox={"0 0 73 73"} iconId={props.iconId}/>
                <Title>{props.text}</Title>

                <Link href={"#"}>
                    <FlexWrapper gap={"13px"} align={"center"}>
                        View More
                        <Icon fill={"#2157F2"} width={"21px"} height={"21px"} viewBox={"0 0 30 30"} iconId={"arrow-right"}/>
                    </FlexWrapper>
                </Link>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 334px;
    height: 402px;
    
    padding: 120px 130px 45px 55px;

    background-color: ${theme.colors.projectLight};
    box-shadow: 0 15px 29px 0 rgba(0, 0, 0, 0.05);
`

const Title = styled.h3`
    color: ${theme.colors.fontDark};
    font-size: 32px;
    font-weight: 500;
    line-height: 125%;
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 196%;
    color: ${theme.colors.accent}
`