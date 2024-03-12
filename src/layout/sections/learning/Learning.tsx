import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {InfoBlock} from "./infoBlock/InfoBlock";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Learning = () => {
    return (
        <StyledLearning>
            <SectionTitle>Learning</SectionTitle>
            <InfoBlock title={"After Effects & Photoshop"}/>
            <InfoBlock title={"Website , Html & cSS"}/>
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    min-height: 100vh;
    background-color: #24335C;
    display: flex;
    flex-direction: column;
    align-items: center;
`
