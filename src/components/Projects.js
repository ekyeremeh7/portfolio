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
import myHealthLogo from '../assets/projects/myhealth.png';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
    transform: translateY(-10px);
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
      title: "Accraaa - Nightlife & Dining Discovery",
      description: "Ghana's nightlife discovery app for iOS and Android. Find trending venues with real-time crowd levels, reserve tables, split bills with friends over Paystack, share live location, and earn loyalty rewards. Built from concept to production as founding engineer.",
      tech: ["Flutter", "Dart", "Riverpod", "Supabase", "Paystack", "Google Maps", "Sentry", "Shorebird"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.accraaa",
      iosDemo: "https://apps.apple.com/us/app/accraaa/id6754570414",
      logo: accraaaLogo,
      icon: "🌃"
    },
    {
      title: "Accraaa Web Platform",
      description: "The full-stack platform behind Accraaa: public venue discovery and booking, a venue-owner dashboard with interactive floor plans, analytics and CRM, and an internal admin suite. Spans 100+ pages and 270+ API routes with dual Stripe and Paystack payments.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "Paystack"],
      github: "#",
      demo: "https://accraaa.com",
      webOnly: true,
      logo: accraaaLogo,
      icon: "🖥️"
    },
    {
      title: "Dodo Workplace",
      description: "Internal employee collaboration hub built with Flutter featuring real-time communication, task management, and workplace productivity tools.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodo",
      iosDemo: "https://apps.apple.com/us/app/dodo-workplace/id6517353759",
      logo: dodoWorkplaceLogo,
      icon: "💼"
    },
    {
      title: "Dodo Messenger",
      description: "External stakeholder communication platform built with Flutter offering real-time messaging, file sharing, and seamless communication features.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodoMessenger",
      iosDemo: "https://apps.apple.com/us/app/dodo-messenger/id6738318360",
      logo: dodoMessengerLogo,
      icon: "💬"
    },
    {
      title: "MyHealth - Health Management App",
      description: "A comprehensive Flutter-based health management application with personalized health records, symptom tracking, medication management, and healthcare professional directory.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Healthcare APIs"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.ehealth.myhealth",
      iosDemo: "https://apps.apple.com/gh/app/my-health/id6463126195",
      logo: myHealthLogo,
      icon: "🏥"
    },
    {
      title: "Ministry of Finance HelpDesk Suite",
      description: "Internal HelpDesk platform for Ministry of Finance with three distinct Flutter applications: Admin, Staff, and Client apps for managing support requests and communications.",
      tech: ["Flutter", "Dart", "Firebase", "Authentication", "Cloud Storage"],
      github: "#",
      demo: "#",
      icon: "🎯"
    },
    {
      title: "Cast Social Mobile App",
      description: "Social media mobile application built with Flutter featuring real-time messaging, user profiles, and social networking capabilities.",
      tech: ["Flutter", "Dart", "GetX", "REST APIs", "State Management"],
      github: "#",
      demo: "#",
      icon: "📱"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React.js showcasing professional experience, projects, and skills with smooth animations.",
      tech: ["React.js", "Styled Components", "Framer Motion", "Responsive Design"],
      github: "https://github.com/ekyeremeh7/portfolio",
      demo: "https://ekyeremeh7.onrender.com",
      webOnly: true,
      icon: "🌐"
    },
    {
      title: "Web Development Services",
      description: "Contract web development services for companies requiring web applications, responsive interfaces, and modern web solutions using React.js, Next.js, and other contemporary technologies.",
      tech: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Node.js"],
      github: "#",
      demo: "#",
      icon: "💻"
    }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
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
              {project.logo ? (
                <ProjectLogo
                  src={project.logo}
                  alt={`${project.title} logo`}
                  loading="lazy"
                />
              ) : (
                project.icon
              )}
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
                {project.github === "#" && (
                  <ProjectLink 
                    href="#" 
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                )}
                {project.demo && project.demo !== "#" && !project.webOnly && (
                  <ProjectLink 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Android
                  </ProjectLink>
                )}
                {project.demo && project.demo !== "#" && project.webOnly && (
                  <ProjectLink 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
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
                {project.demo === "#" && !project.iosDemo && (
                  <ProjectLink 
                    href="#" 
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                  >
                    <FaExternalLinkAlt /> Demo
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
