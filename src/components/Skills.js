import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaDatabase,
  FaMobile,
  FaServer,
  FaCode,
  FaCreditCard,
  FaVideo,
  FaMapMarkedAlt,
  FaGithub,
  FaCloud,
  FaLayerGroup,
  FaRocket,
  FaBug,
} from 'react-icons/fa';
import { borders, colors, gradientText, radii, surfaces } from '../theme';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${surfaces.subtle};
  border-radius: ${radii.xl};
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  margin-bottom: 0.75rem;
  ${gradientText()}
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${colors.textSubtle};
  font-size: 0.95rem;
  margin-bottom: 3rem;
`;

const scrollLeft = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const TickerOuter = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(10,10,10,0.95), rgba(10,10,10,0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(10,10,10,0.95), rgba(10,10,10,0));
  }
`;

const TickerTrack = styled.div`
  display: flex;
  gap: 0.75rem;
  width: max-content;
  animation: ${scrollLeft} 28s linear infinite;
  padding: 0.25rem 0;

  &:hover {
    animation-play-state: paused;
  }
`;

const TickerTrackReverse = styled(TickerTrack)`
  animation: ${scrollRight} 32s linear infinite;
`;

const TickerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.pill};
  white-space: nowrap;
  color: ${colors.textMuted};
  font-size: 0.875rem;
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;

  svg {
    color: ${colors.primary};
    font-size: 0.95rem;
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${borders.primary};
    color: ${colors.text};
  }
`;

const row1 = [
  { name: 'Flutter',     icon: <FaMobile /> },
  { name: 'Dart',        icon: <FaCode /> },
  { name: 'Riverpod',    icon: <FaLayerGroup /> },
  { name: 'GetX',        icon: <FaLayerGroup /> },
  { name: 'Firebase',    icon: <FaServer /> },
  { name: 'Supabase',    icon: <FaDatabase /> },
  { name: 'React.js',    icon: <FaReact /> },
  { name: 'Next.js',     icon: <FaReact /> },
  { name: 'TypeScript',  icon: <FaCode /> },
  { name: 'JavaScript',  icon: <FaJs /> },
  { name: 'Tailwind CSS',icon: <FaCss3Alt /> },
  { name: 'Hive',        icon: <FaDatabase /> },
];

const row2 = [
  { name: 'Paystack',       icon: <FaCreditCard /> },
  { name: 'Stripe',         icon: <FaCreditCard /> },
  { name: 'Socket.IO',      icon: <FaServer /> },
  { name: 'Agora',          icon: <FaVideo /> },
  { name: 'Google Maps',    icon: <FaMapMarkedAlt /> },
  { name: 'PostgreSQL',     icon: <FaDatabase /> },
  { name: 'GitHub Actions', icon: <FaGithub /> },
  { name: 'Fastlane',       icon: <FaRocket /> },
  { name: 'Shorebird',      icon: <FaRocket /> },
  { name: 'Sentry',         icon: <FaBug /> },
  { name: 'Vercel',         icon: <FaCloud /> },
  { name: 'Playwright',     icon: <FaCode /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>Stack</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Skills & Technologies
      </SectionTitle>

      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Hover to pause
      </SectionSubtitle>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <TickerOuter>
          <TickerTrack>
            {[...row1, ...row1].map((skill, i) => (
              <TickerItem key={i}>
                {skill.icon}
                {skill.name}
              </TickerItem>
            ))}
          </TickerTrack>
        </TickerOuter>

        <TickerOuter>
          <TickerTrackReverse>
            {[...row2, ...row2].map((skill, i) => (
              <TickerItem key={i}>
                {skill.icon}
                {skill.name}
              </TickerItem>
            ))}
          </TickerTrackReverse>
        </TickerOuter>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
