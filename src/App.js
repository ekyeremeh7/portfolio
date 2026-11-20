import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToastProvider from './components/Toast';
import { gradients, tints } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${gradients.page};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 80%, ${tints.primaryFaint} 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${tints.secondaryFaint} 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.06;
    pointer-events: none;
    z-index: 3;
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <ToastProvider>
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Process />
                  <Experience />
                  <Contact />
                </>
              } />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ToastProvider>
  );
}

export default App;
