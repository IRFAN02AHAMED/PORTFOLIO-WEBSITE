import React from "react";
import styled from "styled-components";
import { achievements, softSkills } from "../../data/constants";

const Container = styled.div`
  padding-top: 30px; /* Reduced from 60px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 40px; /* Matches Experience title */
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary}; /* White color */
  text-align: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px; /* Responsive size */
  }
`;



const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const CertificationCard = styled.div`
  text-align: center;
  max-width: 320px;
`;

const CertificationImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: 200px; /* Set a fixed height */
  object-fit: cover; /* Ensures images fill space properly */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;


const CertificationName = styled.p`
  font-size: 20px; /* Matches Experience and SectionTitle */
  font-weight: 600;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary}; /* White color */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px; /* Responsive size */
  }
`;


const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          As a passionate fresher, I have worked on multiple personal projects
          and academic assignments, where I have gained hands-on experience in
          full-stack development, UI/UX design, and problem-solving. I am eager
          to apply my skills to real-world projects.
        </Desc>

        {/* Achievements Section */}
        <Section>
          <SectionTitle>Achievements</SectionTitle>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                {achievement.title} - {achievement.description}
              </ListItem>
            ))}
          </List>
        </Section>

        {/* Certifications Section */}
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <CertificationsContainer>
            <CertificationCard>
              <CertificationImage
                src="/assets/certifications/Javascript Course With Certification.png"
                alt="Javascript Certificate"
              />
              <CertificationName>
                Introduction to JavaScript - Scaler
              </CertificationName>
            </CertificationCard>
            <CertificationCard>
              <CertificationImage
    src="/assets/certifications/Introduction to SQL.png"
    alt="SQL Certificate"
  />
  <CertificationName>
    Introduction to SQL - Simplilearn
  </CertificationName>
</CertificationCard>
            <CertificationCard>
              <CertificationImage
                src="/assets/certifications/CREATE 1ST PYTHON PROGRAM.png"
                alt="Python Beginner Certificate"
              />
              <CertificationName>CREATE YOUR 1ST PYTHON PROGRAM FROM UST - UDEMY</CertificationName>
            </CertificationCard>

            
          </CertificationsContainer>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Experience;
