import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/Menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import photo1 from "../../../assets/images/photo1.webp"
import photo2 from "../../../assets/images/photo2.webp"
import photo3 from "../../../assets/images/photo3.webp"
import photo4 from "../../../assets/images/photo4.webp"
import {Container} from "../../../components/Container";


const projectItems = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle> Projects </SectionTitle>
                    <Menu menuItems={projectItems}/>
                    <FlexWrapper wrap ={"wrap"}>
                        <Project src={photo1} alt={photo1} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo2} alt={photo2} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo3} alt={photo3} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo4} alt={photo4} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo1} alt={photo1} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo2} alt={photo2} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo3} alt={photo3} title={"Story motion for sale English cources"}></Project>
                        <Project src={photo4} alt={photo4} title={"Story motion for sale English cources"}></Project>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #9a9be3;
`