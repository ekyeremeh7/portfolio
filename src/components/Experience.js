import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #00d4ff, #ff0096);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;

  &:nth-child(odd) {
    .content {
      margin-left: 0;
      margin-right: 50%;

      @media (max-width: 768px) {
        margin-right: 0;
        margin-left: 50px;
      }

      &::before {
        right: -10px;
        left: auto;

        @media (max-width: 768px) {
          left: -10px;
          right: auto;
        }
      }
    }
  }

  &:nth-child(even) {
    .content {
      margin-left: 50%;
      margin-right: 0;

      @media (max-width: 768px) {
        margin-left: 50px;
      }

      &::before {
        left: -10px;

        @media (max-width: 768px) {
          left: -10px;
        }
      }
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      border-right-color: transparent;
      border-left-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #00d4ff, #ff0096);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #00d4ff;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Achievements = styled.ul`
  color: #ccc;
  padding-left: 1.5rem;
  line-height: 1.6;
`;

const Achievement = styled.li`
  margin-bottom: 0.5rem;
`;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Dodo Technologies',
      duration: 'September 2023 - Present',
      location: 'Accra, Greater Accra, Ghana',
      description: 'Spearheading the development and management of two Flutter applications: Dodo Workplace and Dodo Messenger.',
      achievements: [
        'Architected and maintained two distinct, high-performance Flutter codebases',
        'Successfully launched both Workplace and Messenger achieving 100+ downloads',
        'Implemented comprehensive real-time communication features including voice/video calling',
        'Integrated Firebase, Socket.IO, GetX, Hive, and Shorebird for enhanced functionality'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'eHealth Technologies',
      duration: 'July 2023 - August 2025',
      location: 'Accra, Greater Accra, Ghana',
      description: 'Spearheaded the client-side development and launch of "MyHealth," a holistic Flutter-based health management application.',
      achievements: [
        'Architected and implemented entire Flutter codebase for health management app',
        'Delivered comprehensive features including health records, symptom tracking, and video consultations',
        'Achieved over 1,000+ combined downloads across iOS and Android platforms',
        'Successfully integrated Agora RTC, Firebase, and Socket.IO for real-time functionality'
      ]
    },
    {
      type: 'work',
      title: 'Flutter Developer',
      company: 'Cast Social',
      duration: 'January 2023 - August 2025',
      location: 'Greater Accra Region, Ghana',
      description: 'Responsible for mobile front-end development, building UI and integrating APIs using Dart and Flutter.',
      achievements: [
        'Built mobile UI and integrated APIs using Dart and Flutter with GetX state management',
        'Collaborated with senior engineers to troubleshoot application issues',
        'Implemented timely solutions supporting seamless operations',
        'Managed entire app release cycle including versioning and store submissions'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Ministry of Finance Ghana',
      duration: 'October 2021 - May 2023',
      location: 'Accra, Greater Accra, Ghana',
      description: 'Lead Flutter Developer for HelpDesk Application Suite - conceived and executed complete development of multi-role platform.',
      achievements: [
        'Developed three distinct Flutter applications for different user bases',
        'Created Admin Application for system oversight and user management',
        'Built Staff Application for technical teams to manage support tickets',
        'Implemented unified authentication system with role-based permissions'
      ]
    },
    {
      type: 'work',
      title: 'Web and App Developer Intern',
      company: 'HYPACART LTD',
      duration: 'August 2020 - November 2020',
      location: 'Kumasi, Ashanti, Ghana',
      description: 'Assisted in development of responsive web interfaces and gained hands-on experience in mobile application development.',
      achievements: [
        'Developed responsive web interfaces using HTML, CSS3, and Bootstrap',
        'Utilized JavaScript (ES6+) and React.js for dynamic, component-based UIs',
        'Gained hands-on experience in mobile application development lifecycle',
        'Supported senior developers in various stages of app development'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'Kwame Nkrumah University of Science and Technology',
      duration: '2017 - 2022',
      location: 'Kumasi, Ghana',
      description: 'Computer Science degree focusing on software engineering, algorithms, and mobile/web development.',
      achievements: [
        'Completed comprehensive Computer Science curriculum',
        'Gained strong foundation in programming and software development',
        'Developed problem-solving skills and technical expertise',
        'Prepared for professional software development career'
      ]
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <TimelineIcon>
              {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </TimelineIcon>
            
            <TimelineContent className="content">
              <JobTitle>{exp.title}</JobTitle>
              <Company>{exp.company}</Company>
              
              <Duration>
                <FaCalendarAlt />
                {exp.duration}
              </Duration>
              
              <Location>
                <FaMapMarkerAlt />
                {exp.location}
              </Location>
              
              <Description>{exp.description}</Description>
              
              <Achievements>
                {exp.achievements.map((achievement, achIndex) => (
                  <Achievement key={achIndex}>{achievement}</Achievement>
                ))}
              </Achievements>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
