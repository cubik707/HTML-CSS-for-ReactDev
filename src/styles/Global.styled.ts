import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',  'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fontDark};
        line-height: 1.2;
    }
    
    a{
        text-decoration: none;
        color: ${theme.colors.fontDark};
    }
    
    ul{
        list-style: none;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    
    section:nth-child(odd){
        background-color: ${theme.colors.primaryBgDark};
    }
`



