import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import photo from "../../../assets/images/man.webp";
import map from "../../../assets/images/map.webp"
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <Container>
                <FlexWrapper align={"end"}>
                    <InfoBlock>
                        <FlexWrapper align={"end"} gap={"15px"} justify={"end"}>
                            <a href={"#"}>
                                <svg width="26.000000" height="26.000000" viewBox="0 0 26 26"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 26L1.83763 19.327C0.701528 17.3683 0.10554 15.1502 0.111748 12.8826C0.111748 5.77709 5.92263 0 13.0559 0C16.52 0 19.7731 1.34078 22.213 3.77519C24.659 6.2096 26.0062 9.44724 26 12.8888C26 19.9943 20.1891 25.7714 13.0497 25.7714H13.0434C10.8768 25.7714 8.74737 25.2277 6.85386 24.202L0 26ZM7.1829 21.8726L7.57402 22.1074C9.2254 23.0836 11.1189 23.5965 13.0497 23.6027H13.0559C18.9847 23.6027 23.8147 18.8018 23.8147 12.895C23.8147 10.0342 22.6972 7.34648 20.6671 5.31987C18.637 3.29325 15.9303 2.18108 13.0559 2.18108C7.12702 2.1749 2.29704 6.97576 2.29704 12.8826C2.29704 14.903 2.86198 16.8741 3.94221 18.5794L4.19675 18.9872L3.11031 22.9354L7.1829 21.8726Z"
                                        fill="url(#paint0_linear_11_6333)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M9.82134 7.49537C9.57922 6.95782 9.32468 6.94546 9.09498 6.93928C8.90873 6.93311 8.69145 6.93311 8.47416 6.93311C8.25687 6.93311 7.90921 7.01343 7.61122 7.33472C7.31322 7.65601 6.48132 8.43453 6.48132 10.0225C6.48132 11.6042 7.64226 13.1365 7.80367 13.3528C7.96508 13.569 10.0448 16.9241 13.329 18.2154C16.0606 19.2905 16.6193 19.0743 17.2091 19.0187C17.7989 18.963 19.1212 18.2401 19.3944 17.4863C19.6613 16.7325 19.6613 16.0899 19.5806 15.954C19.4999 15.8181 19.2826 15.7378 18.9598 15.5771C18.637 15.4165 17.0477 14.638 16.7497 14.5267C16.4517 14.4217 16.2344 14.3661 16.0233 14.6874C15.8061 15.0087 15.1852 15.7316 14.999 15.9478C14.8127 16.1641 14.6203 16.1888 14.2975 16.0282C13.9746 15.8675 12.9317 15.5277 11.6962 14.4279C10.7339 13.5752 10.0821 12.5187 9.89584 12.1974C9.70959 11.8761 9.87721 11.7031 10.0386 11.5424C10.1814 11.4003 10.3615 11.1655 10.5229 10.9802C10.6843 10.7948 10.7402 10.6589 10.8457 10.4426C10.9512 10.2264 10.9016 10.041 10.8209 9.88035C10.7402 9.72588 10.1069 8.13178 9.82134 7.49537Z"
                                          fill="white"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_11_6333" x1="13.0025" y1="25.9975" x2="13.0025"
                                                        y2="0"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F9F9F9"/>
                                            <stop offset="1" stop-color="white"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a href={"#"}>
                                <Icon width={"26px"} height={"26px"} viewBox={"0 0 26 26"} iconId={"ins-border"}/>
                            </a>
                            <a href={"#"}>
                                <Icon width={"26px"} height={"26px"} viewBox={"0 0 26 26"} iconId={"export-border"}/>
                            </a>
                        </FlexWrapper>
                        <Name>I’m Alireza Kavousy nezjad</Name>
                        <Facts>
                            <ListItem>I was born in Iran-Mashhad</ListItem>
                            <ListItem>I’m 20 years old</ListItem>
                            <ListItem>I have started my interest in this field from 2019</ListItem>
                            <ListItem>I’m designer , video editor , web developer and ...</ListItem>
                            <ListItem>My phone number in Iran +989212073348</ListItem>
                        </Facts>
                    </InfoBlock>
                </FlexWrapper>
            </Container>

        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    background-color: #A6BCFA;
    background-image: url(${photo}), url(${map});
    background-position: 608px -16px, 55px 31px;
    background-size: auto, 60%;
    background-repeat: no-repeat;

    padding: 400px 0 55px 0;
`

const InfoBlock = styled.div`
    max-width: 563px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 100px 0 100px 0;
    backdrop-filter: blur(20px);
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5) -8.163%, rgba(0, 71, 255, 0.05) 103.54%);
    border: 2px solid rgba(255, 255, 255, 0.5);

    padding: 30px 10px 65px 60px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 1;
`

const Name = styled.span`
    font-size: 60px;
    font-weight: 700;
    display: block;
    color: ${theme.colors.fontLight};
    margin: 25px 0 25px 0;
`

const Facts = styled.ul`

`

const ListItem = styled.li`
    font-size: 20px;
    font-weight: 400;
    color: ${theme.colors.fontLight};

    &::before {
        content: "";
        background-image: linear-gradient(to bottom, rgb(166, 188, 250), rgb(33, 87, 242) 100%);

        width: 18px;
        height: 18px;
        border-radius: 50%;

        position: absolute;
        left: 59px;
    }
`
