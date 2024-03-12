import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import photo from "../../../assets/images/man.webp";
import map from "../../../assets/images/map.webp"

export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <MapImage src={map} alt={"Map"}/>
            <InfoBlock>
                <FlexWrapper>
                    <a href={"#"}>
                        <Icon iconId={"wa-border"}/>
                    </a>
                    <a href={"#"}>
                        <Icon iconId={"ins-border"}/>
                    </a>
                    <a href={"#"}>
                        <Icon iconId={"export-border"}/>
                    </a>
                </FlexWrapper>
                <span>I’m Alireza Kavousy nezjad</span>
                <Facts>
                    <li>I was born in Iran-Mashhad</li>
                    <li>I’m 20 years old</li>
                    <li>I have started my interest in this field from 2019</li>
                    <li>I’m designer , video editor , web developer and ...</li>
                    <li>My phone number in Iran +989212073348</li>
                </Facts>
            </InfoBlock>
            <MeImage src={photo} alt={"My photo"}/>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    background-color: #A6BCFA;
    background-image: url("../../../assets/images/map.webp");
    display: flex;
    align-items: end;
    justify-content: space-between;
`

const MapImage = styled.img`
    max-width: 881px;
    max-height: 813px;
    position: absolute;    
`

const InfoBlock = styled.div`
    width: 563px;
    height: 491px;
    border: 4px solid darkmagenta;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const Facts = styled.ul`

`

const MeImage = styled.img`
    width: 821px;
    height: 946px;
`