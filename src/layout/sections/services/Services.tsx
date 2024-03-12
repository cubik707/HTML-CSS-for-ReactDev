import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Service} from "./service/Service";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>Services</SectionTitle>
            <FlexWrapper>
                <Service iconId={"video-play"} text={"Video Edit Service"}/>
                <Service iconId={"edit"} text={"Ui/Ux Designer"}/>
                <Service iconId={"notebook"} text={"Website Developer"}/>
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    min-height: 100vh;
    background-color: #fcc88f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`