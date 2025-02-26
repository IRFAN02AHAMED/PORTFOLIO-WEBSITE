import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

/* ✅ Global Styles to Remove Extra Top Padding */
const GlobalStyles = createGlobalStyle`
  .vertical-timeline-element-content {
    padding-top: 12px !important; /* Reduce top padding */
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  margin-top: -4px; /* Move content up slightly */
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-bottom: 0px; /* Removes extra space */
  padding: 0px; /* Ensures compact spacing */

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 0px; /* ✅ No extra spacing */

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div``;

const EducationCard = ({ education }) => {
  return (
    <>
      {/* ✅ Apply Global Styles */}
      <GlobalStyles />

      <VerticalTimelineElement
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "8px", /* ✅ Reduce spacing */
          padding: "10px 16px", /* ✅ Reduce top padding */
          background: "#1d1836",
          color: "#fff",
          boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          backgroundColor: "rgba(17, 25, 40, 0.83)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          borderRadius: "6px",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(255, 255, 255, 0.3)",
        }}
        date={education.date}
      >
        <Top>
          <Image src={education.img} />
          <Body>
            <Name>{education.school}</Name>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
            <Grade>{education.grade}</Grade> {/* ✅ Properly aligned */}
          </Body>
        </Top>

        <Description>
          <Span>{education.desc}</Span>
        </Description>
      </VerticalTimelineElement>
    </>
  );
};

export default EducationCard;
