import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePicture from '../assets/profile-picture.jpg';
import { borders, colors, gradients, gradientText, media, radii, surfaces, tints } from '../theme';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionLabel = styled(motion.div)`
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Label = styled.span`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border: 1px solid ${borders.primary};
  border-radius: ${radii.pill};
  color: ${colors.primary};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  ${gradientText()}
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div``;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.textMuted};
  margin-bottom: 2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${surfaces.card};
  border-radius: ${radii.lg};
  border: 1px solid ${borders.subtle};
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${colors.textSubtle};
  font-size: 0.9rem;
`;

const SkillsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primary};
  border-radius: ${radii.pill};
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
`;

const AboutImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 400px;
  background: ${gradients.placeholder};
  border-radius: ${radii.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, ${tints.primaryFaint}, transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "10+", label: "Applications Built" },
    { number: "30+", label: "Technologies" },
    { number: "5k+", label: "App Downloads" }
  ];

  const previewSkills = ["Flutter", "Dart", "React.js", "Next.js", "Firebase", "JavaScript"];

  return (
    <AboutSection id="about" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>About</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        About Me
      </SectionTitle>

      <AboutContainer>
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Computer Science graduate from KNUST with eight years of production engineering. I build mobile and web
            applications that ship — clean architecture, real CI/CD, outcomes I can put numbers on.
          </AboutText>

          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I wear two hats. As CTO at Accraaa, I own technical direction and platform architecture for the
            nightlife discovery app I built from concept to production. As Senior Software Engineer at Dodo
            Technologies, I lead mobile across two enterprise Flutter apps and drive the architecture decisions
            that keep them running at 99.9% uptime.
          </AboutText>

          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsContainer>

          <SkillsPreview>
            {previewSkills.map((skill, index) => (
              <SkillTag
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsPreview>
        </AboutContent>

        <AboutImage>
          <ImagePlaceholder
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={profilePicture}
              alt="Emmanuel Kwabena Kyeremeh"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '15px'
              }}
            />
          </ImagePlaceholder>
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;