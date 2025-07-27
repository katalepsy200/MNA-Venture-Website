import React from 'react';
import styled from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';

const FooterSection = styled.footer`
  width: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e2cbb3 50%, transparent 100%);
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 30px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  text-align: left;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 20px 20px;
  }
`;

const CompanySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(226, 203, 179, 0.4), 0 0 30px rgba(226, 203, 179, 0.3);
  }
`;

const CompanyDescription = styled.p`
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(226, 203, 179, 0.1) 0%, rgba(226, 203, 179, 0.05) 100%);
  color: #e2cbb3;
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 203, 179, 0.1);
  font-size: 1.2rem;
  
  &:hover {
    background: linear-gradient(135deg, #e2cbb3 0%, #bfa074 100%);
    color: #1a1a1a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(226, 203, 179, 0.3);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ColumnTitle = styled.h3`
  color: #e2cbb3;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #e2cbb3 0%, transparent 100%);
  }
`;

const FooterLink = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: #e2cbb3;
    transform: translateX(4px);
  }
  
  &::before {
    content: '→';
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #b0b0b0;
  font-size: 0.9rem;
`;

const ContactIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2cbb3;
`;

const BottomSection = styled.div`
  border-top: 1px solid rgba(226, 203, 179, 0.1);
  padding: 25px 20px;
  background: rgba(0, 0, 0, 0.2);
`;

const BottomContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: #888;
  font-size: 0.85rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PolicyLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PolicyLink = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e2cbb3;
  }
`;

const NewsletterSection = styled.div`
  margin-top: 15px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid rgba(226, 203, 179, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.9rem;
  
  &::placeholder {
    color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #e2cbb3;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NewsletterButton = styled.button`
  padding: 10px 16px;
  background: linear-gradient(135deg, #e2cbb3 0%, #bfa074 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(226, 203, 179, 0.3);
  }
`;

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <FooterSection>
      <FooterContainer>
        <CompanySection>
          <Logo src={mnaLogo} alt="MNA Ventures Logo" />
          <CompanyDescription>
            MNA Ventures is a leading investment and venture capital firm specializing in innovative 
            business solutions and strategic partnerships across global markets.
          </CompanyDescription>
          <SocialRow>
            <SocialLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </SocialLink>
          </SocialRow>
          <NewsletterSection>
            <ColumnTitle>Stay Updated</ColumnTitle>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <NewsletterButton type="submit">Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </CompanySection>

        <FooterColumn>
          <ColumnTitle>Products</ColumnTitle>
          <FooterLink href="/products/trading-platform">Trading Platform</FooterLink>
          <FooterLink href="#">Mobile App</FooterLink>
          <FooterLink href="#">24/7 Support</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact Info</ColumnTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <span>UAE | GERMANY | USA</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <span>connect@mna-ventures.com</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <span>+971-4423-3841</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>🕒</ContactIcon>
              <span>24/7 Support</span>
            </ContactItem>
          </ContactInfo>
        </FooterColumn>
      </FooterContainer>

      <BottomSection>
        <BottomContainer>
          <Copyright>
            <span>© 2024 MNA Ventures. All rights reserved.</span>
            <span>Developed by <a href="#" style={{ color: '#e2cbb3', textDecoration: 'none', fontWeight: '500' }}>Dev.JB</a></span>
          </Copyright>
          <PolicyLinks>
            <PolicyLink href="#" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </PolicyLink>
            <PolicyLink href="#" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </PolicyLink>
            <PolicyLink href="#" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </PolicyLink>
          </PolicyLinks>
        </BottomContainer>
      </BottomSection>
    </FooterSection>
  );
};

export default Footer; 