import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
  background: linear-gradient(135deg, #ffffff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    padding: 0 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #333, #555);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #00d4ff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #ccc;
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
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 15px;
  color: #00d4ff;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 25px;
  color: #00d4ff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Dodo Workplace",
      description: "Internal employee collaboration hub built with Flutter featuring real-time communication, task management, and workplace productivity tools.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodo",
      iosDemo: "https://apps.apple.com/us/app/dodo-workplace/id6517353759",
      icon: "💼"
    },
    {
      title: "Dodo Messenger",
      description: "External stakeholder communication platform built with Flutter offering real-time messaging, file sharing, and seamless communication features.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Hive"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.company.dodoMessenger",
      iosDemo: "https://apps.apple.com/us/app/dodo-messenger/id6738318360",
      icon: "💬"
    },
    {
      title: "MyHealth - Health Management App",
      description: "A comprehensive Flutter-based health management application with personalized health records, symptom tracking, medication management, and healthcare professional directory.",
      tech: ["Flutter", "Dart", "Firebase", "Socket.IO", "GetX", "Healthcare APIs"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.ehealth.myhealth",
      iosDemo: "https://apps.apple.com/gh/app/my-health/id6463126195",
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
      demo: "https://ekyeremeh7.github.io/portfolio",
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
              {project.icon}
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
