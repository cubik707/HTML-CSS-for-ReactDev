import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Service} from "./service/Service";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <FlexWrapper align={"center"} direction={"column"}>
                    <SectionTitle marginTop={"50px"} marginBottom={"80px"}>Services</SectionTitle>
                    <FlexWrapper gap={"30px"} margin={"0 0 95px 0"}>
                        <Service iconId={"video-play"} text={"Video Edit Service"}/>
                        <Service iconId={"edit"} text={"Ui/Ux Designer"}/>
                        <Service iconId={"notebook"} text={"Website Developer"}/>
                    </FlexWrapper>
                </FlexWrapper>

            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
`