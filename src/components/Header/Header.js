import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillRedditCircle, AiFillRedditSquare, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiV } from "react-icons/si";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  {

  // Define the WhatsApp phone number or contact you want to chat with
  const whatsappNumber = '9559318323'; // Replace with the desired phone number or contact

  // Function to open the WhatsApp chat
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <SiV size="5rem" />
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sadabjr/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sadab-ali-439b22286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons onClick={openWhatsAppChat} style={{ cursor: 'pointer' }}>
          <AiOutlineWhatsApp size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
