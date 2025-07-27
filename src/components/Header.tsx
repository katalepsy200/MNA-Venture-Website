import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';
import InvestorSignupModal from './InvestorSignupModal';
import { Link, useLocation } from 'react-router-dom';

const HeaderBar = styled.header<{scrolled?: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({scrolled}) => scrolled ? 'rgba(34, 31, 28, 0.95)' : 'rgba(34, 31, 28, 0.1)'};
  backdrop-filter: ${({scrolled}) => scrolled ? 'blur(20px)' : 'blur(10px)'};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${({scrolled}) => scrolled ? '0 4px 32px 0 rgba(34,31,28,0.15)' : 'none'};
  border-bottom: ${({scrolled}) => scrolled ? '1px solid rgba(226,203,179,0.1)' : 'none'};
  overflow-x: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  user-select: none;
  margin-right: auto;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  img {
    height: 45px;
    transition: all 0.3s ease;
    filter: brightness(1.1) contrast(1.1);
  }
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.2) contrast(1.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 12px;
  position: relative;
  font-family: inherit;
  letter-spacing: 0.02em;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(226,203,179,0.1) 0%, rgba(191,160,116,0.1) 100%);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%);
    border-radius: 1px;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  
  &:hover, &:focus {
    color: #e2cbb3;
    transform: translateY(-1px);
    &::before {
      opacity: 1;
    }
    &::after {
      transform: scaleX(1);
    }
    text-decoration: none;
  }
  
  &.active {
    color: #e2cbb3;
    &::before {
      opacity: 1;
    }
    &::after {
      transform: scaleX(1);
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &.open svg {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: rgba(34, 31, 28, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226,203,179,0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(34,31,28,0.2);
  opacity: ${({isOpen}) => isOpen ? 1 : 0};
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
  transform: ${({isOpen}) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  z-index: 1000;
  padding: 8px 0;
  pointer-events: ${({isOpen}) => isOpen ? 'auto' : 'none'};
`;

const DropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(226,203,179,0.1);
    color: #e2cbb3;
    transform: translateX(4px);
  }
  
  &.active {
    background: rgba(226,203,179,0.15);
    color: #e2cbb3;
    border-left: 3px solid #e2cbb3;
  }
`;

const SignUpButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  margin-left: 16px;
  border-radius: 50px;
  background: linear-gradient(135deg, #e2cbb3 0%, #bfa074 100%);
  color: #221f1c;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px 0 rgba(226,203,179,0.3);
  border: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  font-family: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #bfa074 0%, #e2cbb3 100%);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgba(226,203,179,0.4);
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 201;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`;

const BurgerLines = styled.div<{open: boolean}>`
  width: 28px;
  height: 22px;
  position: relative;
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transition: all 0.3s, background 0.3s;
  }
  span:nth-child(1) {
    top: 0;
    ${({open}) => open && css`transform: rotate(45deg); top: 9px;`}
  }
  span:nth-child(2) {
    top: 9px;
    ${({open}) => open && css`opacity: 0;`}
  }
  span:nth-child(3) {
    top: 18px;
    ${({open}) => open && css`transform: rotate(-45deg); top: 9px;`}
  }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const Backdrop = styled.div<{open: boolean}>`
  display: none;
  @media (max-width: 900px) {
    display: ${({open}) => open ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(30,41,59,0.25);
    z-index: 1100;
    transition: opacity 0.3s;
    opacity: ${({open}) => open ? 1 : 0};
  }
`;

const MobileMenu = styled.div<{open: boolean}>`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    width: 85vw;
    max-width: 340px;
    height: 100vh;
    background: linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%);
    z-index: 1200;
    padding: 32px 24px 24px 24px;
    box-shadow: -4px 0 24px 0 rgba(30,41,59,0.15);
    animation: ${css`${slideIn} 0.3s forwards`};
    transition: box-shadow 0.3s, background 0.3s;
  }
`;

const MobileMenuHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const MobileLogo = styled.img`
  height: 36px;
  margin-right: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #221f1c;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover, &:focus {
    background: #f3f4f6;
    color: #bfa074;
    outline: none;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  width: 100%;
  margin-top: 24px;
`;

const MobileNavLink = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: #221f1c;
  text-decoration: none;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid rgba(34,31,28,0.08);
  border-radius: 4px;
  transition: color 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1);
  background: transparent;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 2.5px;
    background: linear-gradient(90deg, #221f1c 0%, #bfa074 100%);
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  &:hover, &:focus {
    color: #fff;
    background: rgba(34,31,28,0.13);
    box-shadow: 0 4px 18px 0 rgba(34,31,28,0.10);
    backdrop-filter: blur(2.5px);
    &::after {
      transform: scaleX(1);
    }
    text-decoration: none;
  }
`;

const MobileSignUpButton = styled.a`
  display: block;
  width: 100%;
  margin: 32px 0 0 0;
  padding: 14px 0;
  border-radius: 999px;
  background: #221f1c;
  color: #e2cbb3;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px 0 rgba(34,31,28,0.10);
  border: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
  cursor: pointer;
  &:hover {
    background: #bfa074;
    color: #221f1c;
    transform: scale(1.04);
    box-shadow: 0 4px 16px 0 rgba(34,31,28,0.16);
  }
`;

const MobileInvestorButton = styled.a`
  display: block;
  width: 100%;
  margin: 16px 0 0 0;
  padding: 14px 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #fff 0%, #e2cbb3 100%);
  color: #221f1c;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px 0 rgba(34,31,28,0.10);
  border: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
  cursor: pointer;
  &:hover {
    background: #fff7ec;
    color: #bfa074;
    transform: scale(1.04);
    box-shadow: 0 4px 16px 0 rgba(34,31,28,0.16);
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'products', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  const handleDropdownToggle = (dropdownName: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <HeaderBar scrolled={scrolled}>
        <HeaderContainer>
          <Logo onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={mnaLogo} alt="MNA Ventures Logo" />
          </Logo>
          <Nav>
            <NavLink 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </NavLink>
            
            <DropdownContainer className="dropdown-container" onMouseLeave={handleDropdownClose}>
              <DropdownButton 
                className={`${activeSection === 'about' ? 'active' : ''} ${openDropdown === 'about' ? 'open' : ''}`}
                onClick={(e) => handleDropdownToggle('about', e)}
              >
                About
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </DropdownButton>
              <DropdownMenu isOpen={openDropdown === 'about'}>
                <DropdownItem 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => scrollToSection('about')}
                >
                  Mission & Vision
                </DropdownItem>
                <DropdownItem 
                  className={activeSection === 'testimonials' ? 'active' : ''}
                  onClick={() => scrollToSection('testimonials')}
                >
                  Testimonials
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
            
            <DropdownContainer className="dropdown-container" onMouseLeave={handleDropdownClose}>
              <DropdownButton 
                className={`${activeSection === 'products' || activeSection === 'portfolio' ? 'active' : ''} ${openDropdown === 'services' ? 'open' : ''}`}
                onClick={(e) => handleDropdownToggle('services', e)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </DropdownButton>
              <DropdownMenu isOpen={openDropdown === 'services'}>
                <DropdownItem 
                  className={activeSection === 'products' ? 'active' : ''}
                  onClick={() => scrollToSection('products')}
                >
                  Investment Products
                </DropdownItem>
                <DropdownItem 
                  className={activeSection === 'portfolio' ? 'active' : ''}
                  onClick={() => scrollToSection('portfolio')}
                >
                  Our Portfolio
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
            
            <NavLink 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavLink>
            
            <SignUpButton onClick={() => setModalOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m22 21-2-2m0-4a4 4 0 0 0-4-4"/>
              </svg>
              Sign up
            </SignUpButton>
          </Nav>
          <Burger aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)}>
            <BurgerLines open={menuOpen}>
              <span />
              <span />
              <span />
            </BurgerLines>
          </Burger>
        </HeaderContainer>
      </HeaderBar>
      <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
      {menuOpen && (
        <MobileMenu open={menuOpen}>
          <MobileMenuHeader>
            <MobileLogo src={mnaLogo} alt="MNA Ventures Logo" />
            <CloseButton aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</CloseButton>
          </MobileMenuHeader>
          <MobileNav>
            <MobileNavLink 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </MobileNavLink>
            
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-600 mb-2 px-4">About</div>
              <MobileNavLink 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
                style={{ paddingLeft: '2rem' }}
              >
                Mission & Vision
              </MobileNavLink>
              <MobileNavLink 
                className={activeSection === 'testimonials' ? 'active' : ''}
                onClick={() => scrollToSection('testimonials')}
                style={{ paddingLeft: '2rem' }}
              >
                Testimonials
              </MobileNavLink>
            </div>
            
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-600 mb-2 px-4">Services</div>
              <MobileNavLink 
                className={activeSection === 'products' ? 'active' : ''}
                onClick={() => scrollToSection('products')}
                style={{ paddingLeft: '2rem' }}
              >
                Investment Products
              </MobileNavLink>
              <MobileNavLink 
                className={activeSection === 'portfolio' ? 'active' : ''}
                onClick={() => scrollToSection('portfolio')}
                style={{ paddingLeft: '2rem' }}
              >
                Our Portfolio
              </MobileNavLink>
            </div>
            
            <MobileNavLink 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </MobileNavLink>
            
            <MobileInvestorButton onClick={() => setModalOpen(true)}>Become Investor</MobileInvestorButton>
            <MobileSignUpButton onClick={() => setModalOpen(true)}>Sign up</MobileSignUpButton>
          </MobileNav>
        </MobileMenu>
      )}
      <InvestorSignupModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
