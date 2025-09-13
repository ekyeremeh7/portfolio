import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00d4ff, transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLogo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff, #ff0096);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #00d4ff, #ff0096);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterLink = styled(motion.a)`
  color: #888;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #00d4ff;
  }
`;

const Copyright = styled.div`
  color: #666;
  font-size: 0.9rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const HeartIcon = styled.span`
  color: #ff0096;
  animation: pulse 2s infinite;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#contact', text: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/ekyeremeh7', icon: <FaGithub /> },
    { href: 'https://linkedin.com/in/ekyeremeh7', icon: <FaLinkedin /> },
    { href: 'mailto:ekyeremeh7@gmail.com', icon: <FaEnvelope /> }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Emmanuel Kwabena Kyeremeh
        </FooterLogo>

        <FooterDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Software Engineer specializing in Flutter & React development. Let's build cutting-edge mobile and web applications together!
        </FooterDescription>

        <SocialLinks>
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </SocialLink>
          ))}
        </SocialLinks>

        <FooterLinks>
          {footerLinks.map((link, index) => (
            <FooterLink
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {link.text}
            </FooterLink>
          ))}
        </FooterLinks>

        <Copyright
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          © {currentYear} Emmanuel Kwabena Kyeremeh. Made with{' '}
          <HeartIcon>
            <FaHeart />
          </HeartIcon>{' '}
          using React
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
