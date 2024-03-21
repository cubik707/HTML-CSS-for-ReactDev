import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {InfoBlock} from "./infoBlock/InfoBlock";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Learning = () => {
    return (
        <StyledLearning>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle marginBottom={"70px"}>Learning</SectionTitle>
                    <FlexWrapper direction={"column"} gap={"20px"} margin={"0 0 0 155px"}>
                        <InfoBlock title={"After Effects & Photoshop"}/>
                        <InfoBlock title={"Website , Html & cSS"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    background-color: #24335C;
    padding: 60px 0 95px 0;
`
