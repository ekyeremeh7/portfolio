import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
    align-items: flex-start;
    padding-top: 4rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 2;

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.1;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: #888;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;

  &.primary {
    background: linear-gradient(135deg, #00d4ff, #ff0096);
    color: #000;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
    }
  }

  &.secondary {
    background: transparent;
    color: #00d4ff;
    border-color: #00d4ff;
    
    &:hover {
      background: #00d4ff;
      color: #000;
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #00d4ff, #ff0096);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }
`;

const HeroImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #ff0096);
  padding: 4px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #0a0a0a;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 2;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #00d4ff, #ff0096);
  border-radius: 50%;
  opacity: 0.6;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 60%;
    right: 10%;
  }
  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
  }
`;

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = "Software Engineer | Flutter & React Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Function to handle resume download
  const handleResumeDownload = (e) => {
    e.preventDefault();

    // Path to your resume in the public folder
    const resumeUrl = '/Emmanuel_Kwabena_Kyeremeh.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Emmanuel_Kwabena_Kyeremeh.pdf';
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Fallback: open in new tab if download doesn't work
    window.open(resumeUrl, '_blank');
  };

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Emmanuel Kwabena Kyeremeh
          </Name>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {currentText}<span style={{ color: '#00d4ff' }}>|</span>
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Software Engineer | Flutter & React Developer | Mobile (Android/iOS) & Web App Specialist.
            Passionate about building impactful mobile and web applications with over 6 years of hands-on coding experience.
          </Description>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              href="#contact"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </Button>
            <Button
              href="/Emmanuel_Kwabena_Kyeremeh.pdf"
              onClick={handleResumeDownload}
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Resume
            </Button>
          </ButtonGroup>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLink
              href="https://github.com/ekyeremeh7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/ekyeremeh7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:ekyeremeh7@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
            <SocialLink
              href="https://ekyeremeh7.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </SocialLink>
          </SocialLinks>
        </HeroContent>

        <HeroImage
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageContainer>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #333, #555)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: '#00d4ff'
            }}>
              EK
            </div>
          </ImageContainer>

          <FloatingElements>
            <FloatingElement
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <FloatingElement
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <FloatingElement
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </FloatingElements>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
