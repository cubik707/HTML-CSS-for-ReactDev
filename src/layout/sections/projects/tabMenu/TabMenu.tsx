import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                } )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }
    
    position: relative;
    
    
    &::after{
        content: "+";
        color: ${theme.colors.accentBgDark};
        font-size: 550px;
        font-weight: 800;
        
        position: absolute;
        transform: rotate(45deg);
        right: -203px;
        top: 507px;

    }
`

const ListItem = styled.li`
`

const Link = styled.a`
    font-size: 20px;
    font-weight: 400;
    padding: 7px 54px;
    box-sizing: border-box;
    border: 3px solid rgb(76, 84, 108);
    border-radius: 67px;
    background-color: ${theme.colors.primaryBgDark};
    
    &:hover{
        border-radius: 67px;
        background: ${theme.colors.accentBgDark};
        border: 3px solid ${theme.colors.accentBgDark};
    }
`