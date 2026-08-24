import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase,
  FaMobile,
  FaServer,
  FaCode,
  FaCreditCard,
  FaVideo,
  FaMapMarkedAlt,
  FaGithub,
  FaChartLine,
  FaCloud
} from 'react-icons/fa';
import { borders, colors, gradientText, radii, surfaces, tints } from '../theme';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${surfaces.subtle};
  border-radius: ${radii.xl};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  ${gradientText()}
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.lg};
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primarySubtle};
  border-radius: ${radii.md};
  min-width: 80px;
  transition: all 0.3s ease;

  &:hover {
    background: ${tints.primarySoft};
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};
`;

const SkillName = styled.span`
  font-size: 0.8rem;
  color: ${colors.text};
  font-weight: 500;
  text-align: center;
`;

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", icon: <FaMobile /> },
        { name: "Dart", icon: <FaCode /> },
        { name: "Riverpod", icon: <FaCode /> },
        { name: "GetX", icon: <FaCode /> },
        { name: "Provider", icon: <FaCode /> },
        { name: "go_router", icon: <FaCode /> },
        { name: "Hive", icon: <FaDatabase /> },
        { name: "Firebase", icon: <FaServer /> },
        { name: "Supabase", icon: <FaServer /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <FaReact /> },
        { name: "TypeScript", icon: <FaCode /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Firebase", icon: <FaServer /> },
        { name: "Supabase", icon: <FaServer /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Socket.IO", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Cloud Storage", icon: <FaServer /> },
        { name: "Authentication", icon: <FaServer /> },
        { name: "Paystack", icon: <FaCreditCard /> },
        { name: "Stripe", icon: <FaCreditCard /> },
        { name: "Agora", icon: <FaVideo /> },
        { name: "Google Maps", icon: <FaMapMarkedAlt /> }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "CI/CD", icon: <FaServer /> },
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "Fastlane", icon: <FaCode /> },
        { name: "Shorebird", icon: <FaCode /> },
        { name: "Sentry", icon: <FaServer /> },
        { name: "Firebase Crashlytics", icon: <FaServer /> },
        { name: "Vercel", icon: <FaCloud /> },
        { name: "PostHog", icon: <FaChartLine /> },
        { name: "Playwright", icon: <FaCode /> },
        { name: "Google Play Store", icon: <FaMobile /> },
        { name: "Apple App Store", icon: <FaMobile /> },
        { name: "Huawei AppGallery Connect", icon: <FaMobile /> }
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </SectionTitle>

      <SkillsGrid>
        {skillCategories.map((category, categoryIndex) => (
          <SkillCategory
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.2 + skillIndex * 0.1 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
