import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    margin-right: 64px;
    ul {
        display: flex;
        gap: 30px;
    }
`

const ListItem = styled.li`
    position: relative;
`

const Link = styled.a`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.fontDark};
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    outline: 1px solid red;
    color: ${theme.colors.accent};
`