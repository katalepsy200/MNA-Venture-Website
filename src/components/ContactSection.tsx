import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const ContactSectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const ContactMainSection = styled.div`
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%);
  padding: 120px 0 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    pointer-events: none;
  }
`;

const FAQSectionContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%);
  padding: 80px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const BreadcrumbContainer = styled.nav`
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const BreadcrumbList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #64748b;
  
  &:not(:last-child)::after {
    content: '›';
    margin-left: 0.5rem;
    color: #3b82f6;
    font-weight: 600;
  }
`;

const BreadcrumbLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1d4ed8;
  }
`;

const BreadcrumbCurrent = styled.span`
  color: #f8fafc;
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(248, 250, 252, 0.8);
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(59, 130, 246, 0.2);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  }
`;

const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffffff;
  transition: all 0.3s ease;
  
  ${ContactCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1d4ed8;
  }
`;

const BusinessHours = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(59, 130, 246, 0.1);
`;

const HoursTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const HoursText = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FormContainer = styled.div`
  animation: ${slideInLeft} 0.6s ease-out;
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const Input = styled.input`
  padding: 1rem 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #1e293b;
  font-size: 1rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #1e293b;
  font-size: 1rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const MapContainer = styled.div`
  animation: ${slideInRight} 0.6s ease-out;
`;

const MapTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const MapCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.2);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  display: block;
`;

const FAQSection = styled.div`
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const FAQTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const FAQSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(248, 250, 252, 0.8);
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const FAQItem = styled.div<{ isOpen: boolean }>`
  background: ${({ isOpen }) => isOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(20px);
  border: 2px solid ${({ isOpen }) => isOpen ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.1)'};
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ isOpen }) => isOpen ? '0 12px 40px rgba(59, 130, 246, 0.25)' : '0 4px 20px rgba(0, 0, 0, 0.05)'};
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 20px 20px 0 0;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: ${({ isOpen }) => isOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'};
    border-color: ${({ isOpen }) => isOpen ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)'};
    transform: ${({ isOpen }) => isOpen ? 'none' : 'translateY(-2px)'};
    box-shadow: ${({ isOpen }) => isOpen ? '0 12px 40px rgba(59, 130, 246, 0.25)' : '0 8px 25px rgba(59, 130, 246, 0.15)'};
  }
`;

const FAQQuestion = styled.h4<{ isOpen?: boolean }>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ isOpen }) => isOpen ? '#1e293b' : '#475569'};
  margin-bottom: 0;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  transition: color 0.3s ease;
  
  &::before {
    content: 'Q:';
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ isOpen }) => isOpen ? '#3b82f6' : '#64748b'};
    background: ${({ isOpen }) => isOpen ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)'};
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    min-width: 24px;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  font-size: 1rem;
  color: #475569;
  line-height: 1.7;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${({ isOpen }) => isOpen ? '1.5rem' : '0'};
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  
  &::before {
    content: 'A:';
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    width: fit-content;
    margin-bottom: 0.75rem;
  }
`;

const AccordionIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  
  &::before {
    content: '+';
    display: block;
    line-height: 1;
  }
`;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactSectionContainer id="contact">
      {/* Contact Main Section */}
      <ContactMainSection>
        <Container>
          <BreadcrumbContainer>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbCurrent>Contact</BreadcrumbCurrent>
              </BreadcrumbItem>
            </BreadcrumbList>
          </BreadcrumbContainer>
          
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Ready to start your investment journey? We're here to help you achieve your financial goals.
          </SectionSubtitle>

          <ContactInfoGrid>
            <ContactCard>
              <ContactIcon>
                📍
              </ContactIcon>
              <ContactTitle>Office Address</ContactTitle>
              <ContactInfo>
                Tameem House – Barsha Heights
              </ContactInfo>
              <ContactInfo>
                Dubai – United Arab Emirates
              </ContactInfo>
              <BusinessHours>
                <HoursTitle>Business Hours</HoursTitle>
                <HoursText>Sunday - Thursday: 9:00 AM - 6:00 PM</HoursText>
                <HoursText>Friday - Saturday: Closed</HoursText>
              </BusinessHours>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                ✉️
              </ContactIcon>
              <ContactTitle>Email Us</ContactTitle>
              <ContactInfo>
                <ContactLink href="mailto:connect@mna-ventures.com">
                  connect@mna-ventures.com
                </ContactLink>
              </ContactInfo>
              <ContactInfo>
                <ContactLink href="mailto:support@mna-ventures.com">
                  support@mna-ventures.com
                </ContactLink>
              </ContactInfo>
              <ContactInfo style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                Response time: Within 24 hours
              </ContactInfo>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                📞
              </ContactIcon>
              <ContactTitle>Call Us</ContactTitle>
              <ContactInfo>
                <ContactLink href="tel:+971-4423-3841">
                  +971-4423-3841
                </ContactLink>
              </ContactInfo>
              <ContactInfo>
                <ContactLink href="tel:+971-50-123-4567">
                  +971-50-123-4567 (Mobile)
                </ContactLink>
              </ContactInfo>
              <ContactInfo style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                Available during business hours
              </ContactInfo>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                🌐
              </ContactIcon>
              <ContactTitle>Connect With Us</ContactTitle>
              <ContactInfo>
                Follow us on social media for updates
              </ContactInfo>
              <SocialLinks>
                <SocialLink href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </ContactCard>
          </ContactInfoGrid>

          <ContentGrid>
            <FormContainer>
              <FormTitle>Send us a message</FormTitle>
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your investment goals and how we can help..."
                  />
                </FormGroup>
                
                <SubmitButton type="submit">
                  Send Message
                </SubmitButton>
              </Form>
            </FormContainer>

            <MapContainer>
              <MapTitle>Find Us</MapTitle>
              <MapCard>
                <MapFrame
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2554.826694373276!2d55.17740848824547!3d25.099472695366163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b70aa43a969%3A0xf6d7cffe8c795305!2s35XG%2BVVQ%20-%20Al%20Barsha%20-%20Barsha%20Heights%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1720108345516!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MNA Ventures Location"
                />
              </MapCard>
            </MapContainer>
          </ContentGrid>
        </Container>
      </ContactMainSection>


    </ContactSectionContainer>
  );
};

export default ContactSection; 