import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const alerts = [
  {
    title: 'Heads up!',
    message: 'You can add components to your app using the cli.'
  },
  {
    title: 'Reminder',
    message: 'Don\'t forget to check your notifications.'
  },
  {
    title: 'Success!',
    message: 'Your changes have been saved.'
  },
  {
    title: 'Info',
    message: 'New features are coming soon.'
  }
];

const AlertStack = styled.div`
  position: relative;
  width: 340px;
  min-height: 220px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  pointer-events: none;
`;

const alertAppear = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const AlertCard = styled.div<{index: number, visible: boolean}>`
  background: #fff;
  color: #221f1c;
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(34,31,28,0.13);
  padding: 18px 20px 16px 20px;
  min-width: 300px;
  max-width: 340px;
  margin-bottom: 10px;
  opacity: ${({visible}) => visible ? 1 : 0};
  transform: ${({visible}) => visible ? 'none' : 'translateY(30px) scale(0.95)'};
  z-index: ${({index}) => 10 - index};
  transition: opacity 0.4s, transform 0.4s;
  animation: ${({visible}) => visible ? css`${alertAppear} 0.5s cubic-bezier(0.4,0,0.2,1)` : 'none'};
  pointer-events: auto;
  position: relative;
`;

const AlertIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  svg {
    color: #bfa074;
    width: 24px;
    height: 24px;
  }
`;

const AlertTitle = styled.h5`
  margin: 0 0 2px 0;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const AlertMessage = styled.div`
  font-size: 0.98rem;
  color: #5a5246;
`;

interface StackedAlertProps {
  visibleCount: number;
}

const StackedAlert: React.FC<StackedAlertProps> = ({ visibleCount }) => {
  const total = alerts.length;
  return (
    <AlertStack>
      {alerts.map((alert, i) => (
        <div key={i} style={{ marginRight: `${i * 50}px` }}>
          <AlertCard index={i} visible={i < visibleCount}>
            <AlertIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal h-4 w-4"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
            </AlertIcon>
            <div>
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertMessage>{alert.message}</AlertMessage>
            </div>
          </AlertCard>
        </div>
      ))}
    </AlertStack>
  );
};

export default StackedAlert; 