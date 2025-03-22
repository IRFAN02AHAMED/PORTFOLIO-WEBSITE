import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { HashRouter } from "react-router-dom";
import Hero from "./components/sections/Hero"; // About (Hero) remains as is
import Skills from "./components/sections/Skills";
import DarkFrameBackground from "./components/canvas/DarkFrameBackground"; // Frame for sections
import { useState } from "react";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
        <Navbar />
        <Body>
          {/* Keep About (Hero) separate */}
          <Hero />

          {/* Wrap Skills, Projects, Experience, Education, and Contact inside DarkFrameBackground */}
          <DarkFrameBackground>
            <Skills />
          </DarkFrameBackground>

          <DarkFrameBackground>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </DarkFrameBackground>

          <DarkFrameBackground>
            <Experience />
          </DarkFrameBackground>

          <DarkFrameBackground>
            <Education />
          </DarkFrameBackground>

          <DarkFrameBackground>
            <Contact />
          </DarkFrameBackground>

          {/* Footer remains at the bottom */}
          <Footer />

          {/* Project Details Modal */}
          {openModal.state && (
            <ProjectDetails
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </Body>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
