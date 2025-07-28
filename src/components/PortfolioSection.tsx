import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';

// Import portfolio images
import otcPartBlue from '../assets/Portfolio/OTC-PART-BLUE-c45d30c0.png';
import regulateLogo from '../assets/Portfolio/Regulate-Logo--0fd75604.png';
import portfolio5 from '../assets/Portfolio/5-1-594bf303.png';
import portfolio9 from '../assets/Portfolio/9-1-0e51f3b4.png';
import fin2 from '../assets/Portfolio/fin2-1db259cd.png';
import techno from '../assets/Portfolio/TECHNO-050e3f23.png';
import logo1 from '../assets/Portfolio/logo1-f99a6798.png';
import otcIntBlue from '../assets/Portfolio/OTC-Int-BLUE-8365e7ef.png';
import portfolio2 from '../assets/Portfolio/2-1-62338b36.png';
import wlcLogo from '../assets/Portfolio/WLC-Logo-Final-1-7cb463f7.jpeg';
import portfolio6 from '../assets/Portfolio/6-1-fdd7df6e.png';
import otcBsBlue from '../assets/Portfolio/OTC-BS-blue-323f10b5.png';
import qce from '../assets/Portfolio/qce-1-0867f73f.png';
import asd from '../assets/Portfolio/asd-e1724584733700-7b03f243.png';

// Portfolio logos using local images
const logos = [
  otcPartBlue,
  regulateLogo,
  portfolio5,
  portfolio9,
  fin2,
  techno,
  logo1,
  otcIntBlue,
  portfolio2,
  wlcLogo,
  portfolio6,
  otcBsBlue,
  qce,
  asd,
];

const Section = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  padding: 80px 0;
  overflow: hidden;
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
  
  @media (max-width: 900px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const ContentSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 40px;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const RoadmapContainer = styled.div`
  position: relative;
  margin: 60px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-50%);
    border-radius: 2px;
    z-index: 1;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const RoadmapCard = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    z-index: 3;
    
    @media (max-width: 768px) {
      top: -10px;
      width: 24px;
      height: 24px;
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  z-index: 4;
  
  @media (max-width: 768px) {
    top: -20px;
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;

const RoadmapIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 20px;
  color: white;
  font-size: 24px;
`;

const RoadmapTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`;

const RoadmapText = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
`;

const PortfolioTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  
  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const PortfolioSubtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: white;
  border-radius: 20px;
  padding: 40px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CarouselContent = styled.div`
  display: flex;
  animation: slide 15s linear infinite;
  
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  margin: 0 40px;
  
  img {
    height: 60px;
    width: auto;
    max-width: 120px;
    object-fit: contain;
    filter: grayscale(0.3);
    transition: filter 0.3s ease;
    
    &:hover {
      filter: grayscale(0);
    }
  }
`;

const LazyImage = styled.img`
  height: 60px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  filter: grayscale(0.3);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: grayscale(0);
  }
`;

const ImagePlaceholder = styled.div`
  height: 60px;
  width: 120px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const PortfolioSection: React.FC = () => {
  const roadmapSteps = [
    {
      step: "01",
      icon: "🚀",
      title: "Launch & Sustain",
      description: "We've helped launch and sustain multiple world-changing startups through strategic guidance and support."
    },
    {
      step: "02", 
      icon: "🎯",
      title: "Market Gap Analysis",
      description: "We identify and capitalize on possible gaps in the market, creating frameworks conducive to sustainable growth."
    },
    {
      step: "03",
      icon: "⚡", 
      title: "Expert Guidance",
      description: "We provide unquantifiable expertise, helping teams reach the correct decisions in the minimum amount of time."
    }
  ];
  
  // Create duplicated array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  
  // Lazy Image Component
  const LazyImageComponent: React.FC<{ src: string; alt: string; index: number }> = ({ src, alt, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px', // Start loading 50px before the image comes into view
          threshold: 0.1
        }
      );
      
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
      
      return () => observer.disconnect();
    }, []);
    
    const handleLoad = () => {
      setIsLoaded(true);
    };
    
    return (
      <LogoItem ref={imgRef}>
        {!isLoaded && isInView && <ImagePlaceholder />}
        {isInView && (
          <LazyImage
            src={src}
            alt={alt}
            onLoad={handleLoad}
            style={{ opacity: isLoaded ? 1 : 0 }}
          />
        )}
      </LogoItem>
    );
  };
  
  return (
    <Section id="portfolio">
      <Container>
        <ContentSection>
          <Badge>Our Roadmap</Badge>
          <Title>Our Trademark Approach</Title>
          <Subtitle>
            Our trademark is our ability to identify potential opportunities and turn them into sustainable businesses. MNA Ventures is comprised of individuals that have decades' worth of experience in venture capital investing, business startups, and product launches.
          </Subtitle>
          
          <RoadmapContainer>
            <RoadmapGrid>
              {roadmapSteps.map((step, index) => (
                <RoadmapCard key={index}>
                  <StepNumber>{step.step}</StepNumber>
                  <RoadmapIcon>{step.icon}</RoadmapIcon>
                  <RoadmapTitle>{step.title}</RoadmapTitle>
                  <RoadmapText>{step.description}</RoadmapText>
                </RoadmapCard>
              ))}
            </RoadmapGrid>
          </RoadmapContainer>
          
          <Subtitle style={{ fontStyle: 'italic', color: '#667eea', fontWeight: '600' }}>
            "With MNA Ventures, experience growth like never before"
          </Subtitle>
        </ContentSection>
        
        <PortfolioTitle>Our Portfolio Companies</PortfolioTitle>
        <PortfolioSubtitle>
          We are proud to have invested in and supported a diverse range of companies, from early-stage startups to established enterprises.
        </PortfolioSubtitle>
        
        <CarouselWrapper>
          <CarouselContent>
            {duplicatedLogos.map((src, idx) => (
              <LazyImageComponent 
                key={idx} 
                src={src} 
                alt={`Portfolio logo ${idx + 1}`} 
                index={idx}
              />
            ))}
          </CarouselContent>
        </CarouselWrapper>
      </Container>
    </Section>
  );
};

export default PortfolioSection; 
