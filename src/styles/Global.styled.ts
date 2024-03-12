import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        margin: 0;
        font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a{
        text-decoration: none;
    }
    
    ul{
        list-style: none;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    
`

export const Container = styled.div`
    max-width: 1194px;
    width: 100%;
    border: 3px solid darkred;
    height: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    
    @media screen and (max-width: 1140px) {
        padding: 0 47px;
    }
`

