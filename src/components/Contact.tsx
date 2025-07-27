import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';
import bgmaxavans from '../assets/bgmaxavans.jpg';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9999999999995!2d3.379205315261839!3d6.524379995282095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: none; }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: none; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #f8f6f2 0%, #fff 100%);
`;

const HeroSection = styled.section`
  width: 100%;
  min-height: 60vh;
  background: linear-gradient(135deg, rgba(34, 31, 28, 0.8) 0%, rgba(34, 31, 28, 0.6) 100%), 
              url(${bgmaxavans}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(226, 203, 179, 0.1) 0%, rgba(191, 160, 116, 0.1) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  z-index: 2;
  position: relative;
  max-width: 800px;
  padding: 0 24px;
  animation: ${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  margin-bottom: 32px;
  opacity: 0.95;
  line-height: 1.6;
`;



const ContactGrid = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: -80px auto 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: -20px;
  }
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(34, 31, 28, 0.12);
  overflow: hidden;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
  width: 100%;
  max-width: 1000px;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  padding: 48px;
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #221f1c;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const FormDesc = styled.p`
  font-size: 1.1rem;
  color: #6b5f4d;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Form = styled.form`
  width: 100%;
`;

const Field = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 16px 12px 16px;
  border-radius: 12px;
  border: 2px solid #e8e4dd;
  font-size: 16px;
  background: #faf9f7;
  outline: none;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    border-color: #bfa074;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(191, 160, 116, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 20px 16px 12px 16px;
  border-radius: 12px;
  border: 2px solid #e8e4dd;
  font-size: 16px;
  background: #faf9f7;
  outline: none;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    border-color: #bfa074;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(191, 160, 116, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #e2cbb3 0%, #bfa074 100%);
  color: #221f1c;
  font-weight: 700;
  font-size: 18px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(226, 203, 179, 0.3);
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(226, 203, 179, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SuccessMsg = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  font-weight: 600;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #10b981;
  animation: ${fadeInUp} 0.5s ease;
`;

const InfoSection = styled.div`
  background: linear-gradient(135deg, #e2cbb3 0%, #bfa074 100%);
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const InfoContent = styled.div`
  position: relative;
  z-index: 2;
  animation: ${slideInRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: #221f1c;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 25px rgba(34, 31, 28, 0.1);
  }
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: #221f1c;
  }
`;

const InfoText = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: 700;
  color: #221f1c;
  margin-bottom: 4px;
  font-size: 16px;
`;

const InfoValue = styled.div`
  color: rgba(34, 31, 28, 0.8);
  font-size: 15px;
  line-height: 1.5;
  
  a {
    color: #221f1c;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StatsSection = styled.section`
  padding: 80px 24px;
  background: #fff;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: #221f1c;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const StatsSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #6b5f4d;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #f8f6f2 0%, #fff 100%);
  border-radius: 16px;
  border: 1px solid #e8e4dd;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(34, 31, 28, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #bfa074;
  margin-bottom: 8px;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #221f1c;
  margin-bottom: 8px;
`;

const StatDesc = styled.div`
  font-size: 0.95rem;
  color: #6b5f4d;
  line-height: 1.5;
`;

const MapSection = styled.section`
  padding: 80px 24px;
  background: linear-gradient(135deg, #f8f6f2 0%, #fff 100%);
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MapTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: #221f1c;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const MapSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #6b5f4d;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const MapCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(34, 31, 28, 0.1);
  overflow: hidden;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to API)
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Get in Touch</HeroTitle>
          <HeroSubtitle>
            Ready to start your investment journey? We're here to help you every step of the way.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContactGrid>
        <ContactCard>
          <ContactContent>
            <FormSection>
              <FormTitle>Send us a message</FormTitle>
              <FormDesc>
                Have questions about our services? Want to discuss investment opportunities? 
                Fill out the form below and we'll get back to you within 24 hours.
              </FormDesc>
              <Form onSubmit={handleSubmit}>
                <Field>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </Field>
                <Field>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </Field>
                <Field>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your investment goals or questions..."
                  />
                </Field>
                <SubmitButton type="submit">
                  Send Message
                </SubmitButton>
                {submitted && (
                  <SuccessMsg>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </SuccessMsg>
                )}
              </Form>
            </FormSection>

            <InfoSection>
              <InfoContent>
                <InfoTitle>Contact Information</InfoTitle>
                
                <InfoItem>
                  <InfoIcon>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 11.54 7.41 11.8.36.3.82.3 1.18 0C13.89 22.54 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 18.88C9.14 18.09 5 14.19 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.19-4.14 7.09-7 9.88z"/>
                      <circle cx="12" cy="11" r="2.5"/>
                    </svg>
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Office Address</InfoLabel>
                    <InfoValue>Tameem House<br />Barsha Heights<br />Dubai <br/>United Arab Emirates</InfoValue>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z"/>
                    </svg>
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Email Address</InfoLabel>
                    <InfoValue>
                      <a href="mailto:info@mna-ventures.com">connect@mna-ventures.com</a>
                    </InfoValue>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.01c.55 0 1 .45 1 1 0 1.35.27 2.67.76 3.88.17.41.07.89-.21 1.11l-2.2 2.2z"/>
                    </svg>
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Phone Number</InfoLabel>
                    <InfoValue>
                      <a href="tel:+234123456789">+971-4423-3841</a>
                    </InfoValue>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Business Hours</InfoLabel>
                    <InfoValue>Monday - Friday: 8:00 AM - 6:00 PM</InfoValue>
                  </InfoText>
                </InfoItem>
              </InfoContent>
            </InfoSection>
          </ContactContent>
        </ContactCard>
      </ContactGrid>

      <StatsSection>
        <StatsContainer>
          <StatsTitle>Why Choose MNA Ventures?</StatsTitle>
          <StatsSubtitle>
            We've helped thousands of investors achieve their financial goals with our proven strategies and dedicated support.
          </StatsSubtitle>
          
          <StatsGrid>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Monthly Happy Clients</StatLabel>
              <StatDesc>Successful investors who trust us with their portfolios</StatDesc>
            </StatCard>
            
            <StatCard>
              <StatNumber>20+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
              <StatDesc>Decades of expertise in investment management</StatDesc>
            </StatCard>
            
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
              <StatDesc>Consistent returns across all our investment products</StatDesc>
            </StatCard>
            
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support Available</StatLabel>
              <StatDesc>Round-the-clock customer service and support</StatDesc>
            </StatCard>
          </StatsGrid>
        </StatsContainer>
      </StatsSection>

      <MapSection>
        <MapContainer>
          <MapTitle>Visit Our Office</MapTitle>
          <MapSubtitle>
            Located in the heart of Lagos, our office is easily accessible and ready to welcome you.
          </MapSubtitle>
          
          <MapCard>
            <MapWrapper>
              <iframe
                src={MAP_EMBED_URL}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MNA Ventures Location"
              />
            </MapWrapper>
          </MapCard>
        </MapContainer>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 