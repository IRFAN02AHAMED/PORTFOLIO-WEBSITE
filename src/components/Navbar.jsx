import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Slight shadow for better visibility
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  text-decoration: none;
  color: inherit;
  margin-right: 32px; // Add spacing from menu items
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(LinkS)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  transition: all 0.6s ease-in-out;
  padding: 20px;
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-left: auto;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">Irfan Ahamed</NavLogo>

        {/* Mobile Icon */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink to="About" smooth={true} duration={500} offset={-80}>About</NavLink>
          <NavLink to="Skills" smooth={true} duration={500} offset={-80}>Skills</NavLink>
          <NavLink to="Projects" smooth={true} duration={500} offset={-80}>Projects</NavLink>
          <NavLink to="Experience" smooth={true} duration={500} offset={-80}>Experience</NavLink>
          <NavLink to="Education" smooth={true} duration={500} offset={-160}>Education</NavLink>
          <NavLink to="Contact" smooth={true} duration={500} offset={-80}>Contact</NavLink>
        </NavItems>

        {/* GitHub Button */}
        <GithubButton href={Bio.github} target="_blank">
          GitHub Profile
        </GithubButton>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink to="About" smooth duration={500} offset={-80} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="Skills" smooth duration={500} offset={-80} onClick={() => setIsOpen(false)}>Skills</NavLink>
            <NavLink to="Projects" smooth duration={500} offset={-80} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="Experience" smooth duration={500} offset={-80} onClick={() => setIsOpen(false)}>Experience</NavLink>
            <NavLink to="Education" smooth duration={500} offset={-100} onClick={() => setIsOpen(false)}>Education</NavLink>
            <NavLink to="Contact" smooth duration={500} offset={-80} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
