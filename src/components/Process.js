import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { borders, colors, gradientText, media, radii, surfaces, tints } from '../theme';

const ProcessSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  margin-bottom: 1rem;
  ${gradientText()}
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${colors.textSubtle};
  font-size: 1rem;
  margin-bottom: 4rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 2.2rem;
    left: 16.5%;
    right: 16.5%;
    height: 1px;
    background: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.secondary}
    );
    opacity: 0.25;
  }

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 3rem;

    &::before {
      display: none;
    }
  }
`;

const Step = styled(motion.div)`
  padding: 0 2rem;
  text-align: center;

  ${media.tablet} {
    padding: 0;
  }
`;

const StepNumeral = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.75rem;
  ${gradientText()}
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: ${colors.textMuted};
  line-height: 1.75;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const StepMetric = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.85rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primarySubtle};
  border-radius: ${radii.pill};
  color: ${colors.primary};
  font-size: 0.78rem;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
  margin: 4rem auto;
  opacity: 0.4;

  ${media.tablet} {
    margin: 2rem auto;
  }
`;

const steps = [
  {
    numeral: 'I',
    title: 'Architect First',
    description:
      'Before writing a line of production code, I map data flow, module boundaries, and state management. Clean Architecture across a 100K+ line codebase means decisions made in week one pay dividends two years later.',
    metric: '40% fewer bugs',
  },
  {
    numeral: 'II',
    title: 'Build and Automate',
    description:
      'Feature development runs alongside the release pipeline — CI/CD, code signing, and crash monitoring from the start, not bolted on at the end. The goal is a release process that takes 15 minutes, not 4 hours.',
    metric: '93.75% faster releases',
  },
  {
    numeral: 'III',
    title: 'Ship and Own It',
    description:
      "Crash monitoring, performance tracking, and OTA update capability from day one. A 0.00% crash rate isn't luck — it's Sentry, structured error handling, and actively watching what production actually does.",
    metric: '99.9% uptime',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <ProcessSection id="process" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>Process</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        How I Work
      </SectionTitle>

      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Three steps. Every project.
      </SectionSubtitle>

      <StepsContainer>
        {steps.map((step, i) => (
          <Step
            key={step.numeral}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
          >
            <StepNumeral>{step.numeral}</StepNumeral>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
            <StepMetric>{step.metric}</StepMetric>
          </Step>
        ))}
      </StepsContainer>

      <Divider />
    </ProcessSection>
  );
};

export default Process;
