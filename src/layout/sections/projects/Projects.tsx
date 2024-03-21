import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import photo1 from "../../../assets/images/photo1.webp"
import photo2 from "../../../assets/images/photo2.webp"
import photo3 from "../../../assets/images/photo3.webp"
import photo4 from "../../../assets/images/photo4.webp"
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import dots from "../../../assets/images/Dots.svg";
import {theme} from "../../../styles/Theme";

const projectItems = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle marginBottom = {"60px"}> Projects </SectionTitle>
                    <TabMenu menuItems={projectItems}/>
                    <FlexWrapper wrap ={"wrap"} gap={"38px"} justify={"start"} margin={"55px 0 0 0"}>
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
    padding: 60px 0 150px 0;
    position: relative;
    ${Container} {
        & > ${FlexWrapper} {
            z-index: 1;
            position: relative;
            &::before{
                content: "";
                background-image:  url(${dots});
                width: 413px;
                height: 505px;
                position: absolute;
                z-index: -1;
                left: 0;
                top: 27px;
            }
        }
    }
    
    &::before{
        content: "+";
        color: ${theme.colors.accentBgDark};
        opacity: 0.4;
        font-size: 450px;
        font-weight: 800;

        position: absolute;
        transform: rotate(45deg);
        right: -52px;
        bottom: -63px;
    }
    
`