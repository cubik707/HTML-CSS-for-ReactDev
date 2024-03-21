import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${theme.colors.fontDark};
    font-size: 32px;
    font-weight: 600;
    position: relative;
    margin-bottom: ${props => props.marginBottom || "90px" };    
    &::before {
        content: "";
        background-image: linear-gradient(to bottom, rgb(166, 188, 250), rgb(33, 87, 242) 100%);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }
`