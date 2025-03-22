import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/DarkFrameBackground";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 84vh;
  padding: 30px;
  z-index: 1;
  margin-left: 100px;

  @media (max-width: 1200px) {
    margin-left: 0;
    padding: 20px;
  }

  @media (max-width: 640px) {
    padding: 16px;
    min-height: 70vh;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 960px) {
    margin-bottom: 16px;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 22px;
  }
`;


const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 48px;

  @media (max-width: 960px) {
    font-size: 26px;
    line-height: 40px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 32px;
    justify-content: center;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Img = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 640px) {
    width: 260px;
    height: 260px;
    border-radius: 15px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const StyledButton = styled.a`
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 14px;
  border-radius: 50px;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <motion.div {...headTextAnimation}>
              <Title>Hi, I am <br /> {Bio.name}</Title>

              <ContactInfo>
                <div>
                  <AiOutlinePhone />
                  <span>6374913272</span>
                </div>
                <div>
                  <AiOutlineMail />
                  <span>irfan02ahamed@gmail.com</span>
                </div>
              </ContactInfo>

              <TextLoop>
                I am a{" "}
                <span>
                  <Typewriter
                    options={{ strings: Bio.roles, autoStart: true, loop: true }}
                  />
                </span>
              </TextLoop>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <SubTitle>{Bio.description}</SubTitle>
            </motion.div>

            <ButtonWrapper>
              <StyledButton href={Bio.resume}>Check Resume</StyledButton>
              <StyledButton href="https://www.linkedin.com/in/irfan-ahamed-n-ba036925a/">
                LinkedIn Profile
              </StyledButton>
              <StyledButton href="https://leetcode.com/u/IRFAN_AHAMED_N/">
                LeetCode Profile
              </StyledButton>
            </ButtonWrapper>
          </HeroLeftContainer>

          <HeroRightContainer>
            <motion.div {...headContentAnimation}>
              <Tilt>
                <Img src={HeroImg} alt="IRFAN AHAMED N" />
              </Tilt>
            </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};
export default Hero;
