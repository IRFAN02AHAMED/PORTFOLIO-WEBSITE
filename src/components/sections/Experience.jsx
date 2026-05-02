import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 52px;
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
`;

const ExperienceCard = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 24px;
  margin-top: 30px;

  background: ${({ theme }) => theme.card};
  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Role = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Details = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Section = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CertificationCard = styled.div`
  text-align: center;
`;

const CertificationImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const CertificationName = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary};
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
{/* 
        <Desc>
          I am an Information Technology student with hands-on experience in AI-driven applications, full-stack development, and API design.
        </Desc> */}

        {/* 🔥 AVASOFT EXPERIENCE */}
        <ExperienceCard>
          <Role>Software Development Intern</Role>
          <Company>Ava Software Private Limited</Company>
          <Date>Internship</Date>

          <Details>
            <li>
              Worked with AI-related concepts such as MCP, agents, API design,
              and prompt engineering.
            </li>
            <li>
              Assisted in developing and integrating real-world application
              features.
            </li>
            <li>
              Gained hands-on experience with modern software development
              practices and workflows.
            </li>
          </Details>
        </ExperienceCard>

        {/* Certifications Section */}
        <Section>
          <SectionTitle>Certifications</SectionTitle>

          <CertificationsContainer>
            <CertificationCard>
              <CertificationImage
                src={`${process.env.PUBLIC_URL}/assets/certifications/Javascript Course With Certification.png`}
              />
              <CertificationName>
                Introduction to JavaScript - Scaler
              </CertificationName>
            </CertificationCard>

            <CertificationCard>
              <CertificationImage
                src={`${process.env.PUBLIC_URL}/assets/certifications/Introduction to SQL.png`}
              />
              <CertificationName>
                Introduction to SQL - Simplilearn
              </CertificationName>
            </CertificationCard>

            <CertificationCard>
              <CertificationImage
                src={`${process.env.PUBLIC_URL}/assets/certifications/CREATE 1ST PYTHON PROGRAM.png`}
              />
              <CertificationName>
                Create Your First Python Program - UST
              </CertificationName>
            </CertificationCard>
          </CertificationsContainer>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Experience;