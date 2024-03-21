import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/ava.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Programs} from "./programms/Programs";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";


export const Main = () => {
    return (
        <StyledMain>
            <MainTitle> designer , video editor , web developer </MainTitle>
            <Container>
                <Info>
                    <FlexWrapper padding={"52px 0 52px 115px"} align={"center"}>
                        <Photo src={photo}/>
                        <TextBlock>
                            <Name>I’m <AccentText>Alireza</AccentText> Kavousy nezjad</Name>
                            <Text>Draft is a revolutionary mobile app built to help you manage your business easily and
                                save your money.
                            </Text>
                            <FlexWrapper gap={"32px"} align={"center"}>
                                <BtnLink href="#">
                                    See Projects
                                    <Icon width={"28px"} height={"28px"} viewBox={"0 0 28 28"}
                                          iconId={"arrow-right"}/>
                                </BtnLink>
                                <Link href="#">
                                    Download Resume
                                </Link>
                            </FlexWrapper>
                        </TextBlock>
                    </FlexWrapper>
                </Info>
                <FlexWrapper justify={"end"}>
                    <Programs></Programs>
                </FlexWrapper>

            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-image: linear-gradient(to right, ${theme.colors.accentBgDark} 30%, ${theme.colors.primaryBgDark} 30%);
    display: flex;
    padding: 190px 0 80px 0;
`

const MainTitle = styled.h1`
    display: none;
`

const Info = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 507px;
    
    & > ${FlexWrapper}{
        border: 2px solid rgba(102,102,102, 0.6);
        border-radius: 200px 0 200px 0;
        backdrop-filter: blur(10px);
        background: linear-gradient(to top right, rgba(57, 57, 57, 0.2), rgba(0, 66, 255, 0.15));
    }    

    &::before {
        content: "+";
        color: ${theme.colors.accentBgDark};
        font-size: 150px;
        font-weight: 800;

        transform: rotate(45deg);
        position: absolute;
        top: -140px;
        left: 370px;
    }
    
    &::after{
        content: "";
        width: 152px;
        height: 152px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 25px solid #24335C;
        position: absolute;
        bottom: -10px;
        right: -2px;
        z-index: -1;
    }

`


const Photo = styled.img`
    width: 401px;
    height: 401px;
    object-fit: cover;

    border-radius: 50%;
    border: 25px solid white;
`

const TextBlock = styled.div`
    margin: 0 89px;
`

const Name = styled.span`
    font-size: 60px;
    font-weight: 700;
    display: block;
`

const AccentText = styled.span`
    color: ${theme.colors.accent};
`

const Text = styled.p`
    display: inline-block;
    font-size: 20px;
    padding: 19px 0 42px 0;
    width: 376px;
`

const BtnLink = styled.a`
    width: 200px;
    height: 54px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 20px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.fontDark};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;    
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: rgb(108, 146, 255);
`