import React from 'react';
import styled from 'styled-components';
import bgmaxavans from '../assets/bgmaxavans.jpg';
import { motion, easeInOut } from 'framer-motion';
import InvestorSignupModal from './InvestorSignupModal';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(${bgmaxavans}) center center/cover no-repeat;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(34, 31, 28, 0.45); /* dark overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    min-height: 420px;
    padding-top: 60px;
  }
  @media (max-width: 600px) {
    min-height: 340px;
    padding-top: 40px;
  }
`;

const CenterDiv = styled.div`
  width: 768px;
  max-width: 95vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px 56px 24px;
  background: rgba(0,0,0,0.10);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(34,31,28,0.12);
  z-index: 3;
  @media (max-width: 900px) {
    width: 98vw;
    padding: 32px 8px 36px 8px;
  }
  @media (max-width: 600px) {
    width: 100vw;
    padding: 18px 2vw 24px 2vw;
    border-radius: 12px;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2px;
  line-height: 1.1;
  @media (max-width: 900px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 400;
  color: #e5e7eb;
  line-height: 1.4;
  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 14px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const Button = styled.a<{primary?: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 36px;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s, transform 0.15s;
  box-shadow: 0 2px 8px 0 rgba(34,31,28,0.08);
  border: ${({primary}) => primary ? 'none' : '1.5px solid #e2cbb3'};
  color: ${({primary}) => primary ? '#fff' : '#221f1c'};
  background: ${({primary}) => primary
    ? 'linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%)'
    : 'rgba(255,255,255,0.85)'};
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 24px 0 rgba(34,31,28,0.18);
    background: ${({primary}) => primary
      ? 'linear-gradient(90deg, #bfa074 0%, #e2cbb3 100%)'
      : 'rgba(255,255,255,1)'};
    color: ${({primary}) => primary ? '#fff' : '#bfa074'};
    border-color: #bfa074;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    font-size: 16px;
    height: 40px;
    padding: 0 0;
    justify-content: center;
  }
`;

const InvestorButton = styled.a`
  display: inline-block;
  padding: 10px 28px;
  margin-left: 16px;
  border-radius: 999px;
  background: linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%);
  color: #221f1c;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px 0 rgba(34,31,28,0.08);
  border: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #bfa074 0%, #e2cbb3 100%);
    color: #fff;
    transform: scale(1.04);
    box-shadow: 0 4px 16px 0 rgba(34,31,28,0.16);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const MainSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Section id="home">
      <CenterDiv
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title as={motion.h1} variants={itemVariants}>
          WE INVEST TO CONNECT.
        </Title>
        <Subtitle as={motion.h2} variants={itemVariants}>
          Welcome to investors center.
        </Subtitle>
        <ButtonRow as={motion.div} variants={itemVariants}>
          <InvestorButton as="button" onClick={() => navigate('/coming-soon')}>Become Investor</InvestorButton>
        </ButtonRow>
        <InvestorSignupModal open={false} onClose={() => {}} />
      </CenterDiv>
    </Section>
  );
};

export default MainSection; 