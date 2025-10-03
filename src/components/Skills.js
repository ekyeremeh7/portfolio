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
  FaCode
} from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00d4ff;
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
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 10px;
  min-width: 80px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #00d4ff;
`;

const SkillName = styled.span`
  font-size: 0.8rem;
  color: #ffffff;
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
        { name: "GetX", icon: <FaCode /> },
        { name: "Riverpod", icon: <FaCode /> },
        { name: "Provider", icon: <FaCode /> },
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
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Firebase", icon: <FaServer /> },
        { name: "Socket.IO", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Cloud Storage", icon: <FaServer /> },
        { name: "Authentication", icon: <FaServer /> }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "CI/CD", icon: <FaServer /> },
        { name: "Shorebird", icon: <FaCode /> },
        { name: "Sentry", icon: <FaServer /> },
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
