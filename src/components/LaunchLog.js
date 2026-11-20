import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { borders, colors, gradients, gradientText, media, radii, surfaces, tints } from '../theme';

const LogSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

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
  margin-bottom: 3rem;
  ${gradientText()}
`;

const Track = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 0 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 11px;
    height: 1px;
    background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
    opacity: 0.35;
    pointer-events: none;
  }
`;

const Milestone = styled.div`
  flex: 1 0 210px;
  scroll-snap-align: start;
  position: relative;
  padding-top: 2.5rem;

  ${media.tablet} {
    flex-basis: 220px;
  }
`;

const Marker = styled.span`
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: ${radii.round};
  background: ${gradients.accent};
  box-shadow: 0 0 0 4px ${tints.primaryFaint};
`;

const Card = styled.div`
  padding: 1.5rem;
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.lg};
  height: 100%;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${borders.primary};
    transform: translateY(-3px);
  }
`;

const Stat = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.4rem;
  font-variant-numeric: tabular-nums;
  ${gradientText()}
`;

const Heading = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Body = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${colors.textMuted};
`;

const entries = [
  {
    stat: 'Oct 2025',
    heading: 'Concept to codebase',
    body: 'Founding engineer and the sole Flutter engineer on the first build.',
  },
  {
    stat: 'Live',
    heading: 'Both stores',
    body: 'Shipped on the App Store and Google Play with Supabase, FCM, Google Maps and Paystack.',
  },
  {
    stat: '~5K',
    heading: 'Android installs',
    body: 'Installed audience on Google Play, with strong 28-day acquisition.',
  },
  {
    stat: '~2K',
    heading: 'Monthly active users',
    body: 'Zero reported iOS crashes in the opt-in analytics window, and a 0.00% crash rate on the latest Android release.',
  },
  {
    stat: 'Now',
    heading: 'CTO',
    body: 'Owning technical direction, platform architecture and release quality as the team grows.',
  },
];

const LaunchLog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <LogSection id="launch" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>Accraaa</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Launch Log
      </SectionTitle>

      <Track
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {entries.map((entry, i) => (
          <Milestone key={entry.heading}>
            <Marker />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              style={{ height: '100%' }}
            >
              <Card>
                <Stat>{entry.stat}</Stat>
                <Heading>{entry.heading}</Heading>
                <Body>{entry.body}</Body>
              </Card>
            </motion.div>
          </Milestone>
        ))}
      </Track>
    </LogSection>
  );
};

export default LaunchLog;
