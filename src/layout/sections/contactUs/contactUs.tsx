import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import location from "../../../assets/images/location.webp"
import telephone from "../../../assets/images/telephone.webp"
import email from "../../../assets/images/email.webp"
import {ContactInfo} from "./contactInfo/ContactInfo";
import {Icon} from "../../../components/icon/Icon";

export const ContactUs = () => {
    return (
        <StyledContactUs>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactBlock>
                <FlexWrapper direction={"column"}>
                    <span>Get in touch</span>
                    <StyledForm>
                        <FlexWrapper>
                            <Field placeholder={"E-mail"}/>
                            <Field placeholder={"Phone"}/>
                        </FlexWrapper>
                        <Field placeholder={"Message"} as={"textarea"}/>
                        <Button type={"submit"}>Send</Button>
                    </StyledForm>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <ContactInfo src={location} alt={"Location icon"} name={"Location"} info={"Mashhad/Iran"}/>
                    <ContactInfo src={telephone} alt={"Telephone icon"} name={"Telephone"} info={"+989150063913"}/>
                    <ContactInfo src={email} alt={"Email icon"} name={"Email"} info={"arkn3913@gmail.com"}/>
                </FlexWrapper>
            </ContactBlock>
            <SocialIconsList>
                <SocialList>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"ins-icon"}/>
                    </SocialIconLink>
                </SocialList>
                <SocialList>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"wa-icon"}/>
                    </SocialIconLink>
                </SocialList>
                <SocialList>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"tg-icon"}/>
                    </SocialIconLink>
                </SocialList>
            </SocialIconsList>
        </StyledContactUs>
    );
};

const StyledContactUs = styled.section`
    min-height: 100vh;
    background-color: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactBlock = styled.div`
    background-color: #2C2B2B;
    max-width: 932px;
    width: 100%;
    height: 462px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledForm = styled.form`
    max-width: 932px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin: auto;
`

const Field = styled.input`

`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialList = styled.li`

`

const SocialIconLink = styled.a`

`