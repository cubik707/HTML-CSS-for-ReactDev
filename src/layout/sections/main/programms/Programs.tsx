import React from 'react';
import styled from "styled-components";
import {Program} from "./Program/Program";
import ps from "../../../../assets/images/ps-logo.webp"
import ai from "../../../../assets/images/ai-logo.webp"
import ae from "../../../../assets/images/ae-logo.webp"
import figma from "../../../../assets/images/figma-logo.webp"


export const Programs = () => {
    return (
        <StyledPrograms>
            <Program src={ps} alt={"photoshop-logo"} title={"Photoshop"}></Program>
            <Program src={ae} alt={"after-effects-logo"} title={"After Effects"}></Program>
            <Program src={ai} alt={"adobe-illustrator-logo"} title={"Illustrator"}></Program>
            <Program src={figma} alt={"figma-logo"} title={"Figma"}></Program>
        </StyledPrograms>
    );
};

const StyledPrograms = styled.div`
/*    max-width: 681px;
    width: 100%;*/
    //border: 4px solid darkcyan;
    padding: 50px 135px 80px 0;
    display: flex;
    gap: 13px;
`