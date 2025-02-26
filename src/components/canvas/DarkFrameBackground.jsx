import React from "react";
import styled, { keyframes } from "styled-components";

// Soft glowing animation
const glowAnimation = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(255, 0, 255, 0.1); }
  50% { box-shadow: 0px 0px 30px rgba(255, 0, 255, 0.4); }
  100% { box-shadow: 0px 0px 10px rgba(255, 0, 255, 0.1); }
`;

// Frame container for each section
const Frame = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 40px auto; /* Center the frame */
  background: radial-gradient(circle, #1a1a1a 50%, #121212 100%);
  border-radius: 15px;
  padding: 40px;
  animation: ${glowAnimation} 4s ease-in-out infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02); /* Slight hover effect */
  }
`;

const DarkFrameBackground = ({ children }) => {
  return <Frame>{children}</Frame>;
};

export default DarkFrameBackground;
