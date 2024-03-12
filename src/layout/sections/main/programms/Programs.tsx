import React from 'react';
import styled from "styled-components";
import {Program} from "./Program/Program";
import ps from "../../../../assets/images/ps-logo.webp"
import ai from "../../../../assets/images/ai-logo.webp"
import ae from "../../../../assets/images/ae-logo.webp"
import figma from "../../../../assets/images/figma-logo.webp"
import {FlexWrapper} from "../../../../components/FlexWrapper";


export const Programs = () => {
    return (
        <StyledPrograms>
            <FlexWrapper>
                <Program src={ps} alt={"photoshop-logo"} title={"Photoshop"}></Program>
                <Program src={ae} alt={"after-effects-logo"}title={"After Effects"}></Program>
                <Program src={ai} alt={"adobe-illustrator-logo"} title={"Illustrator"}></Program>
                <Program src={figma} alt={"figma-logo"} title={"Figma"}></Program>
            </FlexWrapper>
        </StyledPrograms>
    );
};

const StyledPrograms = styled.section`
    background-color: #324896;
    min-height: 124px;
    width: 681px;
`