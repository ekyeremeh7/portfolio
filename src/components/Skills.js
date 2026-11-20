import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
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
  FaMicrosoft,
  FaChartBar,
} from 'react-icons/fa';
import { borders, colors, gradientText, media, radii, shadows, surfaces, tints } from '../theme';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${surfaces.subtle};
  border-radius: ${radii.xl};
  margin-top: 2rem;
  margin-bottom: 2rem;

  ${media.tablet} {
    padding: 4rem 1.25rem;
  }
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

const Bento = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(motion.div)`
  position: relative;
  padding: 1.5rem;
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.lg};
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(400px circle at var(--tx, 50%) var(--ty, 0%), ${tints.primarySoft}, transparent 55%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: ${borders.primary};
    transform: translateY(-4px);
    box-shadow: ${shadows.accentLift};
  }

  &:hover::before {
    opacity: 1;
  }

  grid-column: span ${({ $span }) => $span};

  ${media.tablet} {
    grid-column: auto;
  }
`;

const TileHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.1rem;
  position: relative;
`;

const TileTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${colors.text};
`;

const TileCount = styled.span`
  font-size: 0.75rem;
  color: ${colors.textFaint};
  font-variant-numeric: tabular-nums;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: relative;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  background: ${surfaces.raised};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.pill};
  color: ${colors.textMuted};
  font-size: 0.82rem;
  font-weight: 500;
  transition: color 0.2s ease, border-color 0.2s ease;

  svg {
    color: ${colors.primary};
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  &:hover {
    color: ${colors.text};
    border-color: ${borders.primary};
  }
`;

const groups = [
  {
    title: 'Mobile',
    span: 2,
    items: [
      { name: 'Flutter', icon: <FaMobile /> },
      { name: 'Dart', icon: <FaCode /> },
      { name: 'Riverpod', icon: <FaLayerGroup /> },
      { name: 'GetX', icon: <FaLayerGroup /> },
      { name: 'Hive', icon: <FaDatabase /> },
      { name: 'Google Maps', icon: <FaMapMarkedAlt /> },
    ],
  },
  {
    title: 'Backend & data',
    span: 1,
    items: [
      { name: 'Firebase', icon: <FaServer /> },
      { name: 'Supabase', icon: <FaDatabase /> },
      { name: 'PostgreSQL', icon: <FaDatabase /> },
      { name: 'Socket.IO', icon: <FaServer /> },
    ],
  },
  {
    title: 'Payments & realtime',
    span: 1,
    items: [
      { name: 'Paystack', icon: <FaCreditCard /> },
      { name: 'Stripe', icon: <FaCreditCard /> },
      { name: 'Agora', icon: <FaVideo /> },
    ],
  },
  {
    title: 'Delivery & monitoring',
    span: 2,
    items: [
      { name: 'GitHub Actions', icon: <FaGithub /> },
      { name: 'Fastlane', icon: <FaRocket /> },
      { name: 'Shorebird', icon: <FaRocket /> },
      { name: 'Sentry', icon: <FaBug /> },
      { name: 'Microsoft Clarity', icon: <FaMicrosoft /> },
      { name: 'PostHog', icon: <FaChartBar /> },
    ],
  },
  {
    title: 'Web & tooling',
    span: 3,
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <FaReact /> },
      { name: 'TypeScript', icon: <FaCode /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
      { name: 'Vercel', icon: <FaCloud /> },
      { name: 'Playwright', icon: <FaCode /> },
    ],
  },
];

const handleTileMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--tx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--ty', `${e.clientY - rect.top}px`);
};

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
        Grouped by what I use them for
      </SectionSubtitle>

      <Bento
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {groups.map((group) => (
          <Tile
            key={group.title}
            $span={group.span}
            onMouseMove={handleTileMove}
          >
            <TileHeader>
              <TileTitle>{group.title}</TileTitle>
              <TileCount>{group.items.length}</TileCount>
            </TileHeader>
            <Chips>
              {group.items.map((skill) => (
                <Chip key={skill.name}>
                  {skill.icon}
                  {skill.name}
                </Chip>
              ))}
            </Chips>
          </Tile>
        ))}
      </Bento>
    </SkillsSection>
  );
};

export default Skills;
