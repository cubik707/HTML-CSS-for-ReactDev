import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/ava.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Programs} from "./programms/Programs";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"center"}>
                    <Photo src={photo}/>
                    <FlexWrapper direction={"column"}>
                        <Name>I’m Alireza Kavousy nezjad</Name>
                        <p>Draft is a revolutionary <MainTitle>mobile app</MainTitle> built to help you manage your business easily and
                            save
                            your money.
                        </p>
                        <FlexWrapper>
                            <a href="#">
                                <FlexWrapper>
                                    <span>See Projects</span>
                                    <Icon width={"28px"} height={"28px"} viewBox={"0 0 28 28"} iconId={"arrow-right"}/>
                                </FlexWrapper>
                            </a>
                            <a href="#">
                                Download Resume
                            </a>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justify={"flex-end"}>
                    <Programs></Programs>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: rgb(201, 178, 222);
`

const Photo = styled.img`
    width: 401px;
    height: 401px;
    object-fit: cover;
`

const MainTitle = styled.h1`
`

const Name = styled.h2`

`