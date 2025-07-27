import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgmaxavans from '../assets/bgmaxavans.jpg';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgmaxavans}) center center/cover no-repeat;
  position: relative;
  padding: 0 16px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(34, 31, 28, 0.45);
    z-index: 0;
  }
  > * {
    position: relative;
    z-index: 1;
  }
`;

const ACCENT_GRADIENT = 'linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%)';
const ACCENT_COLOR = '#bfa074';

const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(34,31,28,0.13);
  padding: 48px 32px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 24px 8px;
    border-radius: 14px;
    max-width: 98vw;
  }
`;

const AccentBar = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 3px;
  background: ${ACCENT_GRADIENT};
  margin: 0 auto 28px auto;
  @media (max-width: 600px) {
    width: 36px;
    height: 4px;
    margin-bottom: 14px;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${ACCENT_COLOR};
  margin-bottom: 18px;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const Message = styled.p`
  font-size: 1.18rem;
  color: #221f1c;
  margin-bottom: 0;
  line-height: 1.7;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 0;
  }
`;

const Illustration = styled.div`
  width: 220px;
  max-width: 90vw;
  margin: 0 auto 32px auto;
  @media (max-width: 600px) {
    width: 140px;
    margin-bottom: 18px;
  }
  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const HammerWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 64px;
  height: 64px;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 2px 8px rgba(34,31,28,0.18));
  @media (max-width: 600px) {
    top: 4px;
    right: 4px;
    width: 40px;
    height: 40px;
  }
`;

const Hammer = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
  transform-origin: 70% 90%;
  animation: hammering 1.2s cubic-bezier(0.7,0,0.3,1) infinite;
  @keyframes hammering {
    0%, 100% { transform: rotate(-18deg); }
    10% { transform: rotate(-18deg); }
    20% { transform: rotate(0deg); }
    28% { transform: rotate(8deg); }
    32% { transform: rotate(-10deg); }
    36% { transform: rotate(-18deg); }
    100% { transform: rotate(-18deg); }
  }
`;

const ComingSoon: React.FC = () => (
  <Wrapper>
    <Card>
      <AccentBar />
      <Illustration>
        {/* undraw_coming_soon_re_hx6a.svg (modern undraw illustration) */}
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="undraw_coming_soon_re_hx6a">
            <ellipse cx="400" cy="550" rx="320" ry="30" fill="#F2F2F2"/>
            <rect x="250" y="180" width="300" height="200" rx="24" fill="#F2F2F2"/>
            <rect x="270" y="200" width="260" height="160" rx="16" fill="#fff"/>
            <rect x="320" y="250" width="160" height="20" rx="10" fill="#e2cbb3"/>
            <rect x="320" y="280" width="160" height="20" rx="10" fill="#bfa074"/>
            <circle cx="400" cy="370" r="16" fill="#bfa074"/>
            <rect x="390" y="360" width="20" height="40" rx="10" fill="#e2cbb3"/>
            <rect x="390" y="400" width="20" height="10" rx="5" fill="#bfa074"/>
            <rect x="390" y="410" width="20" height="10" rx="5" fill="#e2cbb3"/>
            <rect x="390" y="420" width="20" height="10" rx="5" fill="#bfa074"/>
            <rect x="390" y="430" width="20" height="10" rx="5" fill="#e2cbb3"/>
            <rect x="390" y="440" width="20" height="10" rx="5" fill="#bfa074"/>
            <rect x="390" y="450" width="20" height="10" rx="5" fill="#e2cbb3"/>
            <rect x="390" y="460" width="20" height="10" rx="5" fill="#bfa074"/>
            <rect x="390" y="470" width="20" height="10" rx="5" fill="#e2cbb3"/>
            <rect x="390" y="480" width="20" height="10" rx="5" fill="#bfa074"/>
            <rect x="390" y="490" width="20" height="10" rx="5" fill="#e2cbb3"/>
            <rect x="390" y="500" width="20" height="10" rx="5" fill="#bfa074"/>
          </g>
        </svg>
      </Illustration>
      <Title>Coming Soon</Title>
      <Message>
        We're working hard to bring you this feature. Stay tuned for something amazing!
      </Message>
    </Card>
  </Wrapper>
);

export default ComingSoon; 