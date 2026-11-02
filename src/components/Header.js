import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import { borders, colors, gradients, gradientText, media, radii, surfaces } from '../theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${surfaces.header};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${borders.subtle};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  ${gradientText(gradients.accent)}
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  ${media.tablet} {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${surfaces.headerScrolled};
    flex-direction: column;
    padding: 2rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    backdrop-filter: blur(10px);
  }
`;

const NavLink = styled.li`
  a {
    color: ${colors.text};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: ${colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${gradients.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LinkedInLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: ${radii.round};
  background: ${surfaces.raised};
  border: 1px solid ${borders.medium};
  color: ${colors.text};
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${gradients.accent};
    color: ${colors.onAccent};
    border-color: transparent;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  ${media.tablet} {
    display: block;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer style={{
      background: isScrolled ? surfaces.headerScrolled : surfaces.header
    }}>
      <Nav>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          EK
        </Logo>

        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          </NavLink>
          <NavLink>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </NavLink>
          <NavLink>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          </NavLink>
          <NavLink>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          </NavLink>
          <NavLink>
            <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
          </NavLink>
          <NavLink>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          </NavLink>
          <NavLink>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </NavLink>
        </NavLinks>

        <NavActions>
          <LinkedInLink
            href="https://linkedin.com/in/ekyeremeh7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </LinkedInLink>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavActions>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
