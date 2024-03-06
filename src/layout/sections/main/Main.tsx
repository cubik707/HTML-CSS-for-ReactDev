import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/ava.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"center"}>
                <Photo src={photo}/>
                <div>
                    <Name>I’m Alireza Kavousy nezjad</Name>
                    <p>Draft is a revolutionary <MainTitle>mobile app</MainTitle> built to help you manage your business easily and
                        save
                        your money.
                    </p>
                </div>
            </FlexWrapper>
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