import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiOutlineWhatsApp
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
   // Define the WhatsApp phone number or contact you want to chat with
   const whatsappNumber = '9559318323'; // Replace with the desired phone number or contact

   // Function to open the WhatsApp chat
   const openWhatsAppChat = () => {
     window.open(`https://wa.me/${whatsappNumber}`, '_blank');
   };
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9559318323">9559318323</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sadabjr047@gmail.com">
            sadabjr047@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Enthuasiasm == Success;</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/sadabjr">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sadab-ali-439b22286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons onClick={openWhatsAppChat} style={{ cursor: 'pointer' }}>
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
