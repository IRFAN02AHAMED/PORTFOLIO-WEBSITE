import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as LinkS } from "react-scroll";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled(LinkS)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};

  a {
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Irfan Ahamed N</Logo>

        {/* Navigation Links */}
        <Nav>
          <NavLink to="About" smooth={true} duration={500} offset={-80}>About</NavLink>
          <NavLink to="Skills" smooth={true} duration={500} offset={-80}>Skills</NavLink>
          <NavLink to="Projects" smooth={true} duration={500} offset={-80}>Projects</NavLink>
          <NavLink to="Education" smooth={true} duration={500} offset={-180}>Education</NavLink>
          <NavLink to="Contact" smooth={true} duration={500} offset={-80}>Contact</NavLink>
        </Nav>

        {/* Contact Information */}
        <ContactInfo>
          <a href="mailto:irfan02ahamed@gmail.com">
            <EmailIcon /> irfan02ahamed@gmail.com
          </a>
          <a href="tel:+916374913272">
            <PhoneIcon /> +91 63749 13272
          </a>
        </ContactInfo>

        {/* Social Media Links */}
        <SocialMediaIcons>
          {Bio.linkedin && (
            <SocialMediaIcon href={Bio.linkedin} target="_blank">
              <LinkedInIcon />
            </SocialMediaIcon>
          )}
        </SocialMediaIcons>

        <Copyright>&copy; {year} Irfan Ahamed N. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
