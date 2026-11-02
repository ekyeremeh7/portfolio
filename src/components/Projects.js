import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { borders, colors, gradients, gradientText, media, radii, shadows, surfaces, tints } from '../theme';
import accraaaLogo from '../assets/projects/accraaa.png';
import dodoWorkplaceLogo from '../assets/projects/dodo-workplace.png';
import dodoMessengerLogo from '../assets/projects/dodo-messenger.png';

const ProjectsSection = styled.section`
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
  margin-bottom: 3rem;
  ${gradientText()}
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    padding: 0 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.lg};
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${borders.primary};
    box-shadow: ${shadows.accentLift};
  }

  ${media.tablet} {
    width: 100%;
    max-width: 400px;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${gradients.placeholder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
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


const ProjectLogo = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 22px;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.45));
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  overflow: hidden;

  ${media.tablet} {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${colors.textMuted};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primary};
  border-radius: ${radii.lg};
  color: ${colors.primary};
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  ${media.tablet} {
    gap: 0.8rem;
    justify-content: center;
  }
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primary};
  border-radius: ${radii.pill};
  color: ${colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${tints.primarySoft};
    transform: translateY(-2px);
  }

  ${media.tablet} {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Accraaa — Nightlife & Dining App",
      description: "Built it solo from a blank Flutter project to 5K installs on Google Play. Real-time crowd levels, table reservations, Paystack split billing, live location sharing, and loyalty rewards. 0.00% crash rate on the latest Android release, zero reported iOS crashes.",
      tech: ["Flutter", "Dart", "Riverpod", "Supabase", "Paystack", "Google Maps", "Sentry", "Shorebird"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.accraaa",
      iosDemo: "https://apps.apple.com/us/app/accraaa/id6754570414",
      logo: accraaaLogo,
    },
    {
      title: "Accraaa Web Platform",
      description: "The full-stack platform behind Accraaa. Public venue booking, a venue-owner dashboard with interactive floor plans and analytics, and an internal admin suite. 100+ pages, 270+ API routes, dual Stripe and Paystack payment processing.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "Paystack"],
      github: "#",
      demo: "https://accraaa.com",
      webOnly: true,
      logo: accraaaLogo,
    },
    {
      title: "Dodo Workplace",
      description: "Enterprise collaboration app for 1K+ concurrent users. I lead the mobile team across a 100K+ line codebase, cut release time 93.75% (4 hours → 15 minutes) through CI/CD automation, and reduced launch time from 3.2s to 1.76s. 99.9% uptime.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive", "GitHub Actions", "Sentry"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodo",
      iosDemo: "https://apps.apple.com/us/app/dodo-workplace/id6517353759",
      logo: dodoWorkplaceLogo,
    },
    {
      title: "Dodo Messenger",
      description: "External stakeholder communication platform for Dodo Technologies. Real-time messaging and file sharing over Socket.IO, with an offline-first message queue that syncs on reconnect. Handles 1K+ daily messages at a 99.9% delivery success rate.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodoMessenger",
      iosDemo: "https://apps.apple.com/us/app/dodo-messenger/id6738318360",
      logo: dodoMessengerLogo,
    },
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>Work</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Featured Projects
      </SectionTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage>
              <ProjectLogo
                src={project.logo}
                alt={`${project.title} logo`}
                loading="lazy"
              />
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                {project.github && project.github !== "#" && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                )}
                {project.demo && (
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> {project.webOnly ? 'Live Demo' : 'Android'}
                  </ProjectLink>
                )}
                {project.iosDemo && (
                  <ProjectLink
                    href={project.iosDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> iOS
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
