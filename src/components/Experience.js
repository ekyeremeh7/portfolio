import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { borders, colors, gradients, gradientText, media, radii, surfaces, tints } from '../theme';

const ExperienceSection = styled.section`
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
  margin-bottom: 3rem;
  ${gradientText()}
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
    background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});
    transform: translateX(-50%);

    ${media.tablet} {
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

      ${media.tablet} {
        margin-right: 0;
        margin-left: 50px;
      }

      &::before {
        right: -10px;
        left: auto;

        ${media.tablet} {
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

      ${media.tablet} {
        margin-left: 50px;
      }

      &::before {
        left: -10px;

        ${media.tablet} {
          left: -10px;
        }
      }
    }
  }
`;

const TimelineContent = styled.div`
  background: ${surfaces.card};
  border: 1px solid ${borders.subtle};
  border-radius: ${radii.lg};
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
    border-right-color: ${borders.subtle};

    ${media.tablet} {
      border-right-color: transparent;
      border-left-color: ${borders.subtle};
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
  background: ${gradients.accent};
  border-radius: ${radii.round};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.onAccent};
  font-weight: bold;
  z-index: 2;

  ${media.tablet} {
    left: 20px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.primary};
`;

const EmploymentBadge = styled.span`
  padding: 0.2rem 0.7rem;
  background: ${tints.primaryFaint};
  border: 1px solid ${borders.primary};
  border-radius: ${radii.pill};
  color: ${colors.primary};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textSubtle};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textSubtle};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${colors.textMuted};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Achievements = styled.ul`
  color: ${colors.textMuted};
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
      employmentType: 'Full-time',
      title: 'Senior Software Engineer, Mobile',
      company: 'Dodo Technologies',
      duration: 'September 2023 - Present',
      location: 'Accra, Greater Accra, Ghana',
      description: 'Leading mobile development for two enterprise Flutter applications, Workplace and Messenger, serving 1k+ concurrent users with 99.9% uptime.',
      achievements: [
        'Architected a Clean Architecture implementation across a 100k+ line codebase, cutting bug resolution time by 40%',
        'Reduced release time by 93.75%, from 4 hours to 15 minutes, through Makefile automation, GitHub Actions, code signing, and App Store Connect API integration',
        'Achieved a 99.9% crash-free rate across 1k+ active users using Sentry and Firebase Crashlytics',
        'Built Socket.IO messaging infrastructure handling 1k+ daily messages at a 99.9% delivery success rate, with an offline-first message queue that syncs everything once connectivity returns',
        'Optimised performance to sub-100ms API response times and a 45% faster launch, from 3.2s to 1.76s',
        'Lead the mobile team and established a code review culture that improved code quality metrics by 60%'
      ]
    },
    {
      type: 'work',
      employmentType: 'Founding Engineer',
      title: 'Founding Engineer → CTO',
      company: 'Accraaa',
      duration: 'October 2025 - Present',
      location: 'United States (Remote)',
      description: 'Led Accraaa from concept to production as the sole Flutter engineer, and now own technical direction, platform architecture, and engineering priorities as CTO.',
      achievements: [
        'Shipped a cross-platform iOS and Android app in Flutter and Riverpod, backed by Supabase, Firebase Cloud Messaging, Google Maps, Paystack, Sentry, and Shorebird over-the-air updates',
        'Built the companion Next.js 15 web platform on Vercel and Supabase, spanning public booking, a venue-owner dashboard, and an internal admin suite',
        'Grew to a ~5K installed audience on Google Play and ~2K monthly active users',
        'Maintained a 0.00% crash rate on the latest Android release and zero reported iOS crashes',
        'Established engineering practices for multi-flavor releases, CI/CD, and monitoring while aligning the technical roadmap with business goals'
      ]
    },
    {
      type: 'work',
      employmentType: 'Contract',
      title: 'Software Engineer',
      company: 'eHealth Technologies',
      duration: 'July 2023 - August 2025',
      location: 'Accra, Greater Accra, Ghana',
      description: 'Spearheaded the development and launch of MyHealth, a comprehensive Flutter-based health management application that reached 1k+ downloads across both app stores.',
      achievements: [
        'Architected the entire Flutter codebase from the ground up, delivering 8+ major features including health records, symptom tracking, medication reminders, appointment scheduling, and secure messaging',
        'Integrated Agora for telemedicine video consultations with HD quality and low latency',
        'Established an offline-first architecture with Hive and Sembast enabling full functionality without connectivity, critical for healthcare access in low-connectivity areas',
        'Implemented Shorebird for zero-downtime hotfixes, replacing 2-3 day store approval waits with instant deployment',
        'Achieved a 99.5% crash-free rate through comprehensive error handling and proactive monitoring'
      ]
    },
    {
      type: 'work',
      employmentType: 'Contract',
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
      employmentType: 'Full-time',
      title: 'Flutter Developer',
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
      employmentType: 'Internship',
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
      description: 'Computer Science degree covering software engineering, algorithms, data structures, and systems design. Started building mobile apps during my second year — that\'s where the Flutter focus began.',
      achievements: []
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <SectionLabel
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Label>Background</Label>
      </SectionLabel>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
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
              <TitleRow>
                <JobTitle>{exp.title}</JobTitle>
                {exp.employmentType && (
                  <EmploymentBadge>{exp.employmentType}</EmploymentBadge>
                )}
              </TitleRow>
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
              
              {exp.achievements.length > 0 && (
                <Achievements>
                  {exp.achievements.map((achievement, achIndex) => (
                    <Achievement key={achIndex}>{achievement}</Achievement>
                  ))}
                </Achievements>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
