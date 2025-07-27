import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

interface MenuItem {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: DropdownItem[];
}

const menu: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    active: true,
    dropdown: [
      { label: 'Homepage 2', href: '/homepage2' },
      { label: 'Homepage 3', href: '/homepage3' },
      { label: 'Homepage 4', href: '/homepage4' },
    ],
  },
  { label: 'Markets', href: '/markets' },
  {
    label: 'Company',
    href: '#',
    dropdown: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  { label: 'Education', href: '/education' },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      { label: 'Documentation', href: 'https://getuikit.com/docs/introduction', external: true, icon: 'external' },
      { label: 'Help Center', href: '/help-center' },
      { label: 'Customers', href: '/customers' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Legal Docs', href: '/legal-docs', icon: 'legal' },
    ],
  },
];

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 92px;
  background: ${({ scrolled }) => scrolled ? 'rgba(34, 31, 28, 0.95)' : 'rgba(34, 31, 28, 0.1)'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'blur(10px)'};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${({ scrolled }) => scrolled ? '0 4px 32px 0 rgba(34,31,28,0.15)' : 'none'};
  border-bottom: ${({ scrolled }) => scrolled ? '1px solid rgba(226,203,179,0.1)' : 'none'};
  overflow-x: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavbarInner = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 92px;
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

const DesktopNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  list-style: none;
`;

const NavLink = styled.a<{ active?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  padding: 16px 20px;
  border-radius: 12px;
  position: relative;
  font-family: inherit;
  letter-spacing: 0.02em;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
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
    left: 20px;
    right: 20px;
    bottom: 12px;
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
  
  ${({ active }) => active && css`
    color: #e2cbb3;
    &::before {
      opacity: 1;
    }
    &::after {
      transform: scaleX(1);
    }
  `}
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &.open svg {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: rgba(34, 31, 28, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226,203,179,0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(34,31,28,0.2);
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  z-index: 1000;
  padding: 8px 0;
  pointer-events: ${({ isOpen }) => isOpen ? 'auto' : 'none'};
`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  
  .icon {
    width: 12px;
    height: 12px;
    margin-left: 8px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: #e2cbb3;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  font-family: inherit;
  
  &:hover {
    color: #fff;
    background: rgba(226,203,179,0.1);
    transform: translateY(-1px);
  }
`;

const SignUpButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
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

const MobileButton = styled.button`
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

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const Backdrop = styled.div<{ open: boolean }>`
  display: none;
  @media (max-width: 900px) {
    display: ${({ open }) => open ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(30,41,59,0.25);
    z-index: 1100;
    transition: opacity 0.3s;
    opacity: ${({ open }) => open ? 1 : 0};
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
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

const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  width: 100%;
  margin-top: 24px;
  list-style: none;
  padding: 0;
`;

const MobileNavItem = styled.li`
  width: 100%;
`;

const MobileNavLink = styled.a<{ active?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: #221f1c;
  text-decoration: none;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid rgba(34,31,28,0.08);
  border-radius: 4px;
  transition: color 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1);
  background: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
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
  
  ${({ active }) => active && css`
    color: #fff;
    background: rgba(34,31,28,0.13);
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const MobileDropdown = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(34,31,28,0.05);
  border-radius: 8px;
  margin: 4px 0;
`;

const MobileDropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  color: #221f1c;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(34,31,28,0.1);
    color: #bfa074;
    transform: translateX(4px);
  }
`;

const MobileSignUpButton = styled.button`
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

const NewNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  const handleDropdownToggle = (dropdownName: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleMobileDropdownToggle = (dropdownName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavbarInner>
          <Logo>
            <img src={mnaLogo} alt="MNA Ventures Logo" />
          </Logo>

          <DesktopNav>
            {menu.map((item) => (
              <NavItem key={item.label} className="dropdown-container" onMouseLeave={handleDropdownClose}>
                {item.dropdown ? (
                  <>
                    <NavLink
                      href={item.href}
                      active={item.active}
                      className={openDropdown === item.label ? 'open' : ''}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onClick={(e) => handleDropdownToggle(item.label, e)}
                    >
                      {item.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1">
                        <polyline points="1 3.5 6 8.5 11 3.5" />
                      </svg>
                    </NavLink>
                    <DropdownMenu
                      isOpen={openDropdown === item.label}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown.map((drop) => (
                        <DropdownItem
                          key={drop.label}
                          href={drop.href}
                          target={drop.external ? '_blank' : undefined}
                          rel={drop.external ? 'noopener noreferrer' : undefined}
                        >
                          {drop.label}
                          {drop.icon === 'external' && (
                            <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                          {drop.icon === 'legal' && (
                            <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </>
                ) : (
                  <NavLink href={item.href} active={item.active}>
                    {item.label}
                  </NavLink>
                )}
              </NavItem>
            ))}
          </DesktopNav>

          <RightSection>
            <LoginButton href="/signin">
              Log in
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </LoginButton>
            <SignUpButton>
              Sign up
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </SignUpButton>
          </RightSection>

          <MobileButton onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </MobileButton>
        </NavbarInner>
      </NavbarContainer>

      <Backdrop open={mobileOpen} onClick={() => setMobileOpen(false)} />
      
      {mobileOpen && (
        <MobileMenu open={mobileOpen}>
          <MobileMenuHeader>
            <MobileLogo src={mnaLogo} alt="MNA Ventures Logo" />
            <CloseButton onClick={() => setMobileOpen(false)}>&times;</CloseButton>
          </MobileMenuHeader>
          
          <MobileNav>
            {menu.map((item) => (
              <MobileNavItem key={item.label}>
                {item.dropdown ? (
                  <>
                    <MobileNavLink
                      href={item.href}
                      active={item.active}
                      onClick={() => handleMobileDropdownToggle(item.label)}
                    >
                      {item.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1">
                        <polyline points="1 3.5 6 8.5 11 3.5" />
                      </svg>
                    </MobileNavLink>
                    <MobileDropdown isOpen={mobileOpenDropdown === item.label}>
                      {item.dropdown.map((drop) => (
                        <MobileDropdownItem
                          key={drop.label}
                          href={drop.href}
                          target={drop.external ? '_blank' : undefined}
                          rel={drop.external ? 'noopener noreferrer' : undefined}
                        >
                          {drop.label}
                        </MobileDropdownItem>
                      ))}
                    </MobileDropdown>
                  </>
                ) : (
                  <MobileNavLink href={item.href} active={item.active}>
                    {item.label}
                  </MobileNavLink>
                )}
              </MobileNavItem>
            ))}
            
            <MobileSignUpButton>
              Log in
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </MobileSignUpButton>
          </MobileNav>
        </MobileMenu>
      )}
    </>
  );
};

export default NewNavbar; 