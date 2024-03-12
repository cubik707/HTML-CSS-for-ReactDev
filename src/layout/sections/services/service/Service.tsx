import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ServicePropsType = {
    iconId: string
    text: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon width={"73px"} height={"73px"} viewBox={"0 0 73 73"} iconId={props.iconId}/>
            <span>{props.text}</span>
            <FlexWrapper>
                <a href={"#"}>
                    <span>View More</span>
                    <Icon width={"21px"} height={"21px"} viewBox={"0 0 21 21"} iconId={"arrow-right"}/>
                </a>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 334px;
    height: 402px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border: 4px solid darkmagenta;
`