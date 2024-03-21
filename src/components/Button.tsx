import styled from "styled-components";
import {theme} from "../styles/Theme";

type StyledBtnPropsType = {
    width?: string
    height?: string
    fontSize?: string

}

export const Button = styled.button<StyledBtnPropsType>`
    width: ${props => props.width || "100px"};
    height: ${props => props.height || "30px"};
    font-size: ${props => props.fontSize || "16px"};
    font-weight: 600;
    border-radius: 20px;
    background-color: ${theme.colors.accent};
`
