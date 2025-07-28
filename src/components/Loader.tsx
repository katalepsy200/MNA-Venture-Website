import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import mnaLogo from '../assets/MNA-Ventures-Logo-Design.png';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const logoScale = keyframes`
  0% { transform: scale(0.8) rotate(0deg); }
  50% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const progressBar = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const LoaderContainer = styled.div<{isLoading: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #374151 0%, #4b5563 50%, #6b7280 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${({isLoading}) => isLoading ? fadeIn : fadeOut} 0.5s ease-in-out;
  opacity: ${({isLoading}) => isLoading ? 1 : 0};
  pointer-events: ${({isLoading}) => isLoading ? 'auto' : 'none'};
`;

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const Logo = styled.img<{isAnimating: boolean}>`
  width: 180px;
  height: 180px;
  animation: ${({isAnimating}) => isAnimating ? logoScale : pulse} 2s ease-in-out infinite;
  filter: brightness(1.3) contrast(1.4) drop-shadow(0 6px 12px rgba(0,0,0,0.15));
`;

const LoadingText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Shape = styled.div<{delay: number; duration: number}>`
  position: absolute;
  background: rgba(226, 203, 179, 0.2);
  border-radius: 50%;
  animation: ${pulse} ${({duration}) => duration}s ease-in-out infinite;
  animation-delay: ${({delay}) => delay}s;
`;

const waveAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(5px) rotate(-3deg); }
  75% { transform: translateY(-5px) rotate(2deg); }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
  align-items: center;
`;

const Dot = styled.div<{delay: number}>`
  width: 12px;
  height: 12px;
  background: #e2cbb3;
  border-radius: 50%;
  animation: ${waveAnimation} 2s ease-in-out infinite;
  animation-delay: ${({delay}) => delay}s;
  box-shadow: 0 2px 8px rgba(226, 203, 179, 0.4);
`;

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <LoaderContainer isLoading={true}>
      <FloatingShapes>
        <Shape style={{ top: '20%', left: '10%', width: '60px', height: '60px' }} delay={0} duration={3} />
        <Shape style={{ top: '60%', right: '15%', width: '40px', height: '40px' }} delay={1} duration={4} />
        <Shape style={{ bottom: '30%', left: '20%', width: '80px', height: '80px' }} delay={2} duration={5} />
      </FloatingShapes>
      
      <LogoContainer>
        <Logo src={mnaLogo} alt="MNA Ventures" isAnimating={isAnimating} />
      </LogoContainer>
      
      <LoadingText>
        Loading MNA Ventures
      </LoadingText>
      
      <LoadingDots>
        <Dot delay={0} />
        <Dot delay={0.3} />
        <Dot delay={0.6} />
        <Dot delay={0.9} />
        <Dot delay={1.2} />
      </LoadingDots>
    </LoaderContainer>
  );
};

export default Loader; 