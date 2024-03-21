import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type ProjectPropsType = {
    src: string
    alt?: string
    title: string
}

interface StyledProjectProps {
    src: string;
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject src={props.src}>
            <Info>
                <Image src={props.src} alt = {props.alt}/>
                <Title>{props.title}</Title>
                <FlexWrapper gap={"20px"} align={"center"} margin={"0 0 23px 0"}>
                    <LinkFilled href={"#"}> Edit for you </LinkFilled>
                    <Link href={"#"}>see preview</Link>
                </FlexWrapper>
            </Info>
        </StyledProject>
    );
};

const StyledProject = styled.div<StyledProjectProps>`
    max-width: 270px;
    width: 25%;
    height: 394px;    

    display: flex;
    align-items: flex-end;
`

const Image = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-top-right-radius: 26px;
    border-top-left-radius: 26px;
`

const Info = styled.div`
    background-color: ${theme.colors.projectDark};
    border-radius: 26px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover{
        background-color: ${theme.colors.accentBgDark};
    }
`

const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;

    //text-align: center;
    margin: 15px 33px 25px 33px;
`

const LinkFilled = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.projectDark};

    background-color: ${theme.colors.fontDark};
    border-radius: 12px;
    width: 109px;
    height: 29px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
        background-color: ${theme.colors.accent};
        color: ${theme.colors.fontDark};
    }
`

const Link = styled.a`
    color: ${theme.colors.accentBgLight};
    font-size: 14px;
    font-weight: 400;
`