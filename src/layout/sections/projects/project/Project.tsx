import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    src: string
    alt?: string
    title: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt = {props.alt}/>
            <Title>{props.title}</Title>
            <Link>Edit for you</Link>
            <Link>see preview</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #353535;
    max-width: 270px;
    width: 25%;
    height: 394px;
`

const Image = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
`

const Title = styled.h3`

`

const Link = styled.a`

`