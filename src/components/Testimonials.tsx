import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const TestimonialSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  padding: 80px 0 80px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const FloatingElement = styled.div<{ delay: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.1);
`;

const SectionLabel = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 60px;
  text-align: center;
  max-width: 600px;
  font-weight: 400;
  line-height: 1.6;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const TestimonialContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  justify-content: center;
  align-items: stretch;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }
`;

const Card = styled.div<{ animate: boolean; delay: number }>`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  padding: 40px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  transition: all 0.3s ease;
  opacity: 0;
  ${props =>
    props.animate &&
    css`
      animation: ${fadeInUp} 0.8s ease forwards;
      animation-delay: ${props.delay}s;
    `}
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.2);
  }
  @media (max-width: 600px) {
    padding: 32px 24px 24px 24px;
  }
`;

const QuoteMark = styled.div`
  font-size: 4rem;
  color: #667eea;
  opacity: 0.3;
  position: absolute;
  top: 16px;
  left: 24px;
  z-index: 0;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  font-family: Georgia, serif;
  @media (max-width: 600px) {
    font-size: 3rem;
    top: 12px;
    left: 16px;
  }
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  color: #374151;
  font-style: italic;
  line-height: 1.7;
  margin: 0 0 24px 0;
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 16px;
  position: relative;
  z-index: 2;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
  border: 3px solid #667eea;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Cite = styled.cite`
  font-size: 1.1rem;
  color: #667eea;
  font-style: normal;
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
`;

const AuthorRole = styled.div`
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 500;
`;

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <TestimonialSection id="testimonials" ref={sectionRef}>
      {/* Floating background elements */}
      <FloatingElement delay={0} size={80} style={{ top: '10%', left: '10%' }} />
      <FloatingElement delay={2} size={120} style={{ top: '20%', right: '15%' }} />
      <FloatingElement delay={4} size={60} style={{ bottom: '20%', left: '20%' }} />
      <FloatingElement delay={1} size={100} style={{ bottom: '10%', right: '10%' }} />
      
      <SectionLabel>What Our Partners Say</SectionLabel>
      <SectionSubtitle>
        Discover how MNA Ventures has transformed ideas into successful ventures and created lasting partnerships that drive innovation forward.
      </SectionSubtitle>
      
      <TestimonialContainer>
        <Card animate={animate} delay={0}>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            Investing is not just about capital—it's about believing in people, ideas, and the future they can create. At MNA Ventures, we've seen how the right support at the right time can turn vision into value, and ambition into impact. Every investment is a partnership in progress.
          </QuoteText>
          <AvatarRow>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="Investor Avatar" />
            <div>
              <Cite>MNA Ventures Investor</Cite>
              <AuthorRole>Angel Investor</AuthorRole>
            </div>
          </AvatarRow>
        </Card>
        
        <Card animate={animate} delay={0.2}>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            The journey from idea to impact is never easy, but with the right partners, it becomes possible. MNA Ventures empowered us to scale, innovate, and reach new markets. Their belief in our vision made all the difference.
          </QuoteText>
          <AvatarRow>
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Founder Avatar" />
            <div>
              <Cite>Sarah Chen</Cite>
              <AuthorRole>Tech Startup Founder</AuthorRole>
            </div>
          </AvatarRow>
        </Card>
        
        <Card animate={animate} delay={0.4}>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            As a first-time founder, I was looking for more than just funding—I needed guidance and a network. MNA Ventures delivered both, helping me avoid costly mistakes and accelerate our growth trajectory.
          </QuoteText>
          <AvatarRow>
            <Avatar src="https://randomuser.me/api/portraits/men/85.jpg" alt="Founder Avatar" />
            <div>
              <Cite>Marcus Rodriguez</Cite>
              <AuthorRole>Fintech Entrepreneur</AuthorRole>
            </div>
          </AvatarRow>
        </Card>
      </TestimonialContainer>
      
      {/* See more stories link */}
      <div className="text-center mt-12 relative z-2">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group transition-all duration-300 transform hover:scale-105"
        >
          See more stories
          <svg 
            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </TestimonialSection>
  );
};

export default Testimonials; 