import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { borders, colors, gradients, gradientText, media, radii, shadows, surfaces } from '../theme';
import profilePicture from '../assets/profile-picture.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 70px 2rem 0;
  overflow: hidden;

  ${media.tablet} {
    padding: 2rem 1rem;
    min-height: auto;
    align-items: flex-start;
    padding-top: 5rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 2;

  ${media.tablet} {
    padding-top: 1rem;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  ${gradientText()}
  line-height: 1.2;

  ${media.tablet} {
    font-size: 2.2rem;
    line-height: 1.1;
  }

  ${media.mobile} {
    font-size: 1.8rem;
    line-height: 1.1;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${colors.textSubtle};
  margin-bottom: 2rem;
  font-weight: 400;

  ${media.tablet} {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${colors.textMuted};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;

  ${media.tablet} {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  ${media.tablet} {
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
    background: ${gradients.accent};
    color: ${colors.onAccent};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${shadows.accentSoft};
    }
  }

  &.secondary {
    background: transparent;
    color: ${colors.primary};
    border-color: ${colors.primary};

    &:hover {
      background: ${colors.primary};
      color: ${colors.onAccent};
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  ${media.tablet} {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: ${radii.round};
  background: ${surfaces.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${gradients.accent};
    transform: translateY(-3px);
    box-shadow: ${shadows.accentSoft};
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const MetricsRow = styled(motion.div)`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${media.tablet} {
    justify-content: center;
  }
`;

const MetricPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.pill};
  backdrop-filter: blur(10px);
`;

const MetricDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: ${radii.round};
  background: ${colors.primary};
  flex-shrink: 0;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const MetricText = styled.span`
  font-size: 0.8rem;
  color: ${colors.textMuted};

  strong {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

const HeroImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: ${radii.round};
  background: ${gradients.accent};
  padding: 4px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: ${radii.round};
    background: ${colors.background};
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: ${radii.round};
    object-fit: cover;
    object-position: center top;
    position: relative;
    z-index: 2;
  }
`;

const Hero = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Emmanuel_Kwabena_Kyeremeh.pdf';
    link.download = 'Emmanuel_Kwabena_Kyeremeh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            CTO at Accraaa · Senior Engineer, Mobile
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I built Accraaa from a blank Flutter project to 5K installs — then became CTO.
            At Dodo I cut the release cycle from 4 hours to 15 minutes.
            Eight years in, mobile is where I do my best work.
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

          <MetricsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: '0.00%', label: 'Crash Rate' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4h → 15min', label: 'Release Cycle' },
              { value: '5K+', label: 'Installs' },
            ].map((m) => (
              <MetricPill key={m.label}>
                <MetricDot />
                <MetricText>
                  <strong>{m.value}</strong> {m.label}
                </MetricText>
              </MetricPill>
            ))}
          </MetricsRow>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
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
            <img src={profilePicture} alt="Emmanuel Kwabena Kyeremeh" />
          </ImageContainer>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
