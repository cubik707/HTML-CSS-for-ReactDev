import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import location from "../../../assets/images/location.webp"
import telephone from "../../../assets/images/telephone.webp"
import email from "../../../assets/images/email.webp"
import {ContactInfo} from "./contactInfo/ContactInfo";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const ContactUs = () => {
    return (
        <StyledContactUs>
            <Container>
                <FlexWrapper align={"center"} direction={"column"}>
                    <SectionTitle marginBottom={"90px"}>Contact Us</SectionTitle>
                    <ContactBlock>
                        <StyledForm>
                            <FormTitle>Get in touch</FormTitle>
                            <FlexWrapper gap={"7px"}>
                                <Field placeholder={"E-mail"}/>
                                <Field placeholder={"Phone"}/>
                            </FlexWrapper>
                            <Field placeholder={"Message"} as={"textarea"}/>
                            <Button type={"submit"}>Send</Button>
                        </StyledForm>

                        <FlexWrapper direction={"column"} gap={"37px"}>
                            <ContactInfo src={location} alt={"Location icon"} name={"Location"} info={"Mashhad/Iran"}/>
                            <ContactInfo src={telephone} alt={"Telephone icon"} name={"Telephone"}
                                         info={"+989150063913"}/>
                            <ContactInfo src={email} alt={"Email icon"} name={"Email"} info={"arkn3913@gmail.com"}/>
                        </FlexWrapper>
                    </ContactBlock>
                    <SocialIconsList>
                        <SocialListItem>
                            <SocialIconLink href={"#"}>
                                <svg width={"33"} height={"33"} viewBox={"0 0 33 33"}
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8.02703 16.0221C8.02703 11.4781 11.8205 7.79451 16.5 7.79451C21.1795 7.79451 24.973 11.4781 24.973 16.0221C24.973 20.566 21.1795 24.2496 16.5 24.2496C11.8205 24.2496 8.02703 20.566 8.02703 16.0221ZM16.5 21.3627C13.4624 21.3627 11 18.9716 11 16.0221C11 13.0724 13.4624 10.6814 16.5 10.6814C19.5376 10.6814 22 13.0724 22 16.0221C22 18.9716 19.5376 21.3627 16.5 21.3627Z"
                                          fill="url(#paint0_linear_11_4785)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8.02703 16.0221C8.02703 11.4781 11.8205 7.79451 16.5 7.79451C21.1795 7.79451 24.973 11.4781 24.973 16.0221C24.973 20.566 21.1795 24.2496 16.5 24.2496C11.8205 24.2496 8.02703 20.566 8.02703 16.0221ZM16.5 21.3627C13.4624 21.3627 11 18.9716 11 16.0221C11 13.0724 13.4624 10.6814 16.5 10.6814C19.5376 10.6814 22 13.0724 22 16.0221C22 18.9716 19.5376 21.3627 16.5 21.3627Z"
                                          fill="url(#paint1_radial_11_4785)"/>
                                    <path
                                        d="M25.3077 9.39207C26.4013 9.39207 27.2878 8.53131 27.2878 7.46945C27.2878 6.40759 26.4013 5.54677 25.3077 5.54677C24.2143 5.54677 23.3278 6.40759 23.3278 7.46945C23.3278 8.53131 24.2143 9.39207 25.3077 9.39207Z"
                                        fill="url(#paint2_linear_11_4785)"/>
                                    <path
                                        d="M25.3077 9.39207C26.4013 9.39207 27.2878 8.53131 27.2878 7.46945C27.2878 6.40759 26.4013 5.54677 25.3077 5.54677C24.2143 5.54677 23.3278 6.40759 23.3278 7.46945C23.3278 8.53131 24.2143 9.39207 25.3077 9.39207Z"
                                        fill="url(#paint3_radial_11_4785)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.5 0C12.0189 0 11.457 0.0184439 9.69707 0.096417C7.94084 0.174199 6.74139 0.44507 5.69187 0.841168C4.60685 1.25056 3.68669 1.79841 2.76934 2.68912C1.85205 3.57989 1.28786 4.4734 0.866261 5.527C0.458347 6.54611 0.179396 7.71081 0.0992932 9.41617C0.0189941 11.1251 0 11.6707 0 16.0221C0 20.3734 0.0189941 20.919 0.0992932 22.6279C0.179396 24.3333 0.458347 25.498 0.866261 26.5171C1.28786 27.5707 1.85205 28.4642 2.76934 29.355C3.68669 30.2457 4.60685 30.7935 5.69187 31.203C6.74139 31.599 7.94084 31.8699 9.69707 31.9477C11.457 32.0256 12.0189 32.0441 16.5 32.0441C20.9811 32.0441 21.543 32.0256 23.3029 31.9477C25.0592 31.8699 26.2586 31.599 27.3081 31.203C28.3931 30.7935 29.3133 30.2457 30.2307 29.355C31.1479 28.4642 31.7121 27.5707 32.1338 26.5171C32.5417 25.498 32.8206 24.3333 32.9007 22.6279C32.981 20.919 33 20.3734 33 16.0221C33 11.6707 32.981 11.1251 32.9007 9.41617C32.8206 7.71081 32.5417 6.54611 32.1338 5.527C31.7121 4.4734 31.1479 3.57989 30.2307 2.68912C29.3133 1.79841 28.3931 1.25056 27.3081 0.841168C26.2586 0.44507 25.0592 0.174199 23.3029 0.096417C21.543 0.0184439 20.9811 0 16.5 0ZM16.5 2.88685C20.9057 2.88685 21.4276 2.90319 23.1674 2.98028C24.7762 3.05151 25.6498 3.31252 26.2312 3.53194C27.0014 3.82259 27.5511 4.16978 28.1284 4.73047C28.7058 5.2911 29.0634 5.82483 29.3627 6.5727C29.5887 7.13727 29.8575 7.98563 29.9308 9.54776C30.0102 11.2372 30.027 11.744 30.027 16.0221C30.027 20.3001 30.0102 20.8069 29.9308 22.4963C29.8575 24.0585 29.5887 24.9068 29.3627 25.4714C29.0634 26.2192 28.7058 26.753 28.1284 27.3136C27.5511 27.8743 27.0014 28.2215 26.2312 28.5121C25.6498 28.7316 24.7762 28.9926 23.1674 29.0638C21.4278 29.1409 20.906 29.1572 16.5 29.1572C12.094 29.1572 11.5723 29.1409 9.83259 29.0638C8.22385 28.9926 7.35019 28.7316 6.76878 28.5121C5.9986 28.2215 5.44895 27.8743 4.87159 27.3136C4.29424 26.753 3.93663 26.2192 3.63731 25.4714C3.41134 24.9068 3.14254 24.0585 3.06919 22.4963C2.9898 20.8069 2.97297 20.3001 2.97297 16.0221C2.97297 11.744 2.9898 11.2372 3.06919 9.54776C3.14254 7.98563 3.41134 7.13727 3.63731 6.5727C3.93663 5.82483 4.29417 5.2911 4.87159 4.73047C5.44895 4.16978 5.9986 3.82259 6.76878 3.53194C7.35019 3.31252 8.22385 3.05151 9.83259 2.98028C11.5724 2.90319 12.0943 2.88685 16.5 2.88685Z"
                                          fill="url(#paint4_linear_11_4785)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.5 0C12.0189 0 11.457 0.0184439 9.69707 0.096417C7.94084 0.174199 6.74139 0.44507 5.69187 0.841168C4.60685 1.25056 3.68669 1.79841 2.76934 2.68912C1.85205 3.57989 1.28786 4.4734 0.866261 5.527C0.458347 6.54611 0.179396 7.71081 0.0992932 9.41617C0.0189941 11.1251 0 11.6707 0 16.0221C0 20.3734 0.0189941 20.919 0.0992932 22.6279C0.179396 24.3333 0.458347 25.498 0.866261 26.5171C1.28786 27.5707 1.85205 28.4642 2.76934 29.355C3.68669 30.2457 4.60685 30.7935 5.69187 31.203C6.74139 31.599 7.94084 31.8699 9.69707 31.9477C11.457 32.0256 12.0189 32.0441 16.5 32.0441C20.9811 32.0441 21.543 32.0256 23.3029 31.9477C25.0592 31.8699 26.2586 31.599 27.3081 31.203C28.3931 30.7935 29.3133 30.2457 30.2307 29.355C31.1479 28.4642 31.7121 27.5707 32.1338 26.5171C32.5417 25.498 32.8206 24.3333 32.9007 22.6279C32.981 20.919 33 20.3734 33 16.0221C33 11.6707 32.981 11.1251 32.9007 9.41617C32.8206 7.71081 32.5417 6.54611 32.1338 5.527C31.7121 4.4734 31.1479 3.57989 30.2307 2.68912C29.3133 1.79841 28.3931 1.25056 27.3081 0.841168C26.2586 0.44507 25.0592 0.174199 23.3029 0.096417C21.543 0.0184439 20.9811 0 16.5 0ZM16.5 2.88685C20.9057 2.88685 21.4276 2.90319 23.1674 2.98028C24.7762 3.05151 25.6498 3.31252 26.2312 3.53194C27.0014 3.82259 27.5511 4.16978 28.1284 4.73047C28.7058 5.2911 29.0634 5.82483 29.3627 6.5727C29.5887 7.13727 29.8575 7.98563 29.9308 9.54776C30.0102 11.2372 30.027 11.744 30.027 16.0221C30.027 20.3001 30.0102 20.8069 29.9308 22.4963C29.8575 24.0585 29.5887 24.9068 29.3627 25.4714C29.0634 26.2192 28.7058 26.753 28.1284 27.3136C27.5511 27.8743 27.0014 28.2215 26.2312 28.5121C25.6498 28.7316 24.7762 28.9926 23.1674 29.0638C21.4278 29.1409 20.906 29.1572 16.5 29.1572C12.094 29.1572 11.5723 29.1409 9.83259 29.0638C8.22385 28.9926 7.35019 28.7316 6.76878 28.5121C5.9986 28.2215 5.44895 27.8743 4.87159 27.3136C4.29424 26.753 3.93663 26.2192 3.63731 25.4714C3.41134 24.9068 3.14254 24.0585 3.06919 22.4963C2.9898 20.8069 2.97297 20.3001 2.97297 16.0221C2.97297 11.744 2.9898 11.2372 3.06919 9.54776C3.14254 7.98563 3.41134 7.13727 3.63731 6.5727C3.93663 5.82483 4.29417 5.2911 4.87159 4.73047C5.44895 4.16978 5.9986 3.82259 6.76878 3.53194C7.35019 3.31252 8.22385 3.05151 9.83259 2.98028C11.5724 2.90319 12.0943 2.88685 16.5 2.88685Z"
                                          fill="url(#paint5_radial_11_4785)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_11_4785" x1="1.92545" y1="1.68465"
                                                        x2="11.7712"
                                                        y2="40.9054" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E60D3"/>
                                            <stop offset="0.142763" stop-color="#913BAF"/>
                                            <stop offset="0.761458" stop-color="#D52D88"/>
                                            <stop offset="1" stop-color="#F26D4F"/>
                                        </linearGradient>
                                        <radialGradient id="paint1_radial_11_4785" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(9.99053 32.0441) rotate(31.4061) scale(30.5699 21.7142)">
                                            <stop stop-color="#FED276"/>
                                            <stop offset="0.17024" stop-color="#FDBD61" stop-opacity="0.975006"/>
                                            <stop offset="0.454081" stop-color="#F6804D"/>
                                            <stop offset="1" stop-color="#E83D5C" stop-opacity="0.01"/>
                                        </radialGradient>
                                        <linearGradient id="paint2_linear_11_4785" x1="1.92545" y1="1.68465"
                                                        x2="11.7712"
                                                        y2="40.9054" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E60D3"/>
                                            <stop offset="0.142763" stop-color="#913BAF"/>
                                            <stop offset="0.761458" stop-color="#D52D88"/>
                                            <stop offset="1" stop-color="#F26D4F"/>
                                        </linearGradient>
                                        <radialGradient id="paint3_radial_11_4785" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(9.99053 32.0441) rotate(31.4061) scale(30.5699 21.7142)">
                                            <stop stop-color="#FED276"/>
                                            <stop offset="0.17024" stop-color="#FDBD61" stop-opacity="0.975006"/>
                                            <stop offset="0.454081" stop-color="#F6804D"/>
                                            <stop offset="1" stop-color="#E83D5C" stop-opacity="0.01"/>
                                        </radialGradient>
                                        <linearGradient id="paint4_linear_11_4785" x1="1.92545" y1="1.68465"
                                                        x2="11.7712"
                                                        y2="40.9054" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E60D3"/>
                                            <stop offset="0.142763" stop-color="#913BAF"/>
                                            <stop offset="0.761458" stop-color="#D52D88"/>
                                            <stop offset="1" stop-color="#F26D4F"/>
                                        </linearGradient>
                                        <radialGradient id="paint5_radial_11_4785" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(9.99053 32.0441) rotate(31.4061) scale(30.5699 21.7142)">
                                            <stop stop-color="#FED276"/>
                                            <stop offset="0.17024" stop-color="#FDBD61" stop-opacity="0.975006"/>
                                            <stop offset="0.454081" stop-color="#F6804D"/>
                                            <stop offset="1" stop-color="#E83D5C" stop-opacity="0.01"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </SocialIconLink>
                        </SocialListItem>
                        <SocialListItem>
                            <SocialIconLink href={"#"}>
                                <svg width={"33"} height={"33"} viewBox={"0 0 33 33"}
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.1896 8.569C11.4732 8.58058 11.787 8.59383 12.0851 9.25473C12.2888 9.70653 12.6316 10.5488 12.9048 11.2201C13.1061 11.7147 13.2696 12.1165 13.3118 12.2007C13.4113 12.3991 13.4776 12.6309 13.3449 12.8959C13.3251 12.9355 13.3067 12.9729 13.2892 13.0086C13.1895 13.2115 13.1162 13.3606 12.9474 13.5577C12.8812 13.6348 12.8128 13.7177 12.7444 13.8007C12.6071 13.9674 12.4697 14.134 12.3504 14.2527C12.1508 14.4506 11.9435 14.6656 12.1757 15.0625C12.4079 15.4598 13.2065 16.7589 14.3894 17.8108C15.6602 18.9409 16.7642 19.4189 17.3248 19.6616C17.4349 19.7093 17.524 19.7479 17.5894 19.7805C17.9874 19.979 18.2195 19.946 18.4516 19.6807C18.6838 19.4161 19.446 18.5223 19.7113 18.1254C19.9766 17.7281 20.2419 17.7943 20.6067 17.9266C20.9715 18.0589 22.9278 19.0191 23.3258 19.2176C23.4034 19.2563 23.4759 19.2912 23.5432 19.3236C23.8209 19.4573 24.0084 19.5475 24.0885 19.6807C24.188 19.8467 24.188 20.641 23.8564 21.5676C23.5248 22.4943 21.9001 23.3881 21.1705 23.4542C21.1003 23.4606 21.0305 23.4688 20.9587 23.4772C20.2844 23.5563 19.4334 23.6561 16.3954 22.4613C12.6573 20.991 10.1926 17.3475 9.68339 16.5948C9.64164 16.5331 9.61303 16.4908 9.59795 16.4707L9.59352 16.4648C9.37895 16.1788 7.97312 14.305 7.97312 12.3661C7.97312 10.5384 8.87389 9.5803 9.28834 9.13949C9.31666 9.10937 9.34271 9.08166 9.36605 9.05626C9.73058 8.6591 10.1618 8.55971 10.427 8.55971C10.4416 8.55971 10.4561 8.55971 10.4707 8.55971C10.7212 8.55968 10.9705 8.55965 11.1896 8.569Z"
                                        fill="url(#paint0_linear_11_4786)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2.28113 23.8088C0.867471 21.4054 0.128514 18.6817 0.128514 15.8618C0.128514 7.11378 7.29317 0 16.0643 0C20.3374 0 24.3213 1.66629 27.3414 4.64639C30.3293 7.65853 32 11.632 32 15.8939C32 24.6419 24.8353 31.7557 16.0643 31.7557C13.3976 31.7557 10.7631 31.1148 8.4498 29.833L0 32.0441L2.28113 23.8088ZM4.8514 22.9115L5.17269 23.3922L3.82329 28.2629L8.83534 26.9491L9.31727 27.2375C11.3414 28.4551 13.6867 29.096 16.0643 29.096C23.3574 29.096 29.3012 23.1679 29.3012 15.8939C29.3012 12.369 27.9197 9.03643 25.4137 6.53699C22.9398 4.0696 19.5984 2.6917 16.0643 2.6917C8.77108 2.6917 2.82731 8.58781 2.82731 15.8939C2.82731 18.3613 3.53414 20.7966 4.8514 22.9115Z"
                                          fill="url(#paint1_linear_11_4786)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_11_4786" x1="0" y1="16.0238" x2="32"
                                                        y2="16.0238" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#20B038"/>
                                            <stop offset="1" stop-color="#60D66A"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_11_4786" x1="0" y1="16.0238" x2="32"
                                                        y2="16.0238" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#20B038"/>
                                            <stop offset="1" stop-color="#60D66A"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </SocialIconLink>
                        </SocialListItem>
                        <SocialListItem>
                            <SocialIconLink href={"#"}>
                                <svg width={"33"} height={"33"} viewBox={"0 0 33 33"}
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5118 32.1064C25.618 32.1064 33 24.9383 33 16.0959C33 7.25353 25.618 0.0853729 16.5118 0.0853729C7.40568 0.0853729 0.0236816 7.25353 0.0236816 16.0959C0.0236816 24.9383 7.40568 32.1064 16.5118 32.1064Z"
                                        fill="url(#paint0_linear_11_4787)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.4873 15.9269C12.2939 13.8934 15.4991 12.5528 17.1028 11.9051C21.6818 10.0557 22.6332 9.73448 23.2534 9.72387C23.3898 9.72153 23.6947 9.75436 23.8923 9.91001C24.0591 10.0414 24.105 10.219 24.1269 10.3436C24.1489 10.4682 24.1763 10.7521 24.1545 10.9739C23.9064 13.5055 22.8327 19.6492 22.2865 22.4846C22.0554 23.6844 21.6003 24.0867 21.1597 24.1261C20.2022 24.2117 19.4751 23.5116 18.5477 22.9213C17.0965 21.9976 16.2767 21.4226 14.8681 20.5213C13.2402 19.4796 14.2955 18.907 15.2232 17.9714C15.466 17.7265 19.6848 14.0004 19.7664 13.6624C19.7767 13.6201 19.7861 13.4625 19.6897 13.3793C19.5933 13.2961 19.451 13.3245 19.3484 13.3472C19.2028 13.3792 16.8845 14.8671 12.3936 17.8109C11.7355 18.2496 11.1395 18.4634 10.6055 18.4522C10.0168 18.4399 8.88432 18.129 8.04246 17.8633C7.00989 17.5373 6.18922 17.365 6.26069 16.8115C6.29791 16.5232 6.70678 16.2283 7.4873 15.9269Z"
                                          fill="white"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_11_4787" x1="16.5118" y1="0.0853729"
                                                        x2="16.5118" y2="31.869" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2AABEE"/>
                                            <stop offset="1" stop-color="#229ED9"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </SocialIconLink>
                        </SocialListItem>
                    </SocialIconsList>
                </FlexWrapper>
            </Container>

        </StyledContactUs>
    );
};

const StyledContactUs = styled.section`
    background-color: ${theme.colors.primaryBgDark};
    padding: 65px 0 200px 0;
`

const ContactBlock = styled.div`
    background-color: ${theme.colors.projectLight};
    max-width: 932px;
    width: 100%;
    height: 462px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledForm = styled.form`
    max-width: 429px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 23px;

    textarea {
        height: 152px;
        resize: none;
    }
`

const FormTitle = styled.legend`
    font-size: 36px;
    font-weight: 500;
    line-height: 136%;
    color: ${theme.colors.fontDark};
`

const Field = styled.input`
    border: none;
    width: 100%;
    border-radius: 9px;
    background-color: ${theme.colors.formBg};
    padding: 10px 30px;

    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 136%;
    color: ${theme.colors.fontDark};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.placeholderColor};
    }
`

const Button = styled.button`
    width: 117px;
    height: 43px;
    border-radius: 9px;
    background-color: ${theme.colors.accent};

    font-size: 16px;
    font-weight: 500;
    line-height: 136%;
    color: ${theme.colors.fontDark};
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px;
    margin-top: 65px;
`

const SocialListItem = styled.li`

`

const SocialIconLink = styled.a`

`