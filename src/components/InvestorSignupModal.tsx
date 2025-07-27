import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div<{open: boolean}>`
  display: ${({open}) => open ? 'flex' : 'none'};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,41,59,0.55);
  align-items: center;
  justify-content: center;
  z-index: 2000;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 48px 0 rgba(30,41,59,0.22);
  padding: 0 0 24px 0;
  min-width: 340px;
  max-width: 95vw;
  width: 420px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const ModalHeader = styled.div`
  background: linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%);
  padding: 22px 28px 14px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Title = styled.h2`
  margin: 0 0 4px 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: #221f1c;
  letter-spacing: 0.01em;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Description = styled.p`
  margin: 0 0 2px 0;
  font-size: 1.01rem;
  color: #4b463e;
  font-weight: 400;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Form = styled.form`
  padding: 18px 28px 0 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #221f1c;
  margin-bottom: 2px;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1.5px solid #e2cbb3;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 0px;
  background: #f9f7f4;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
  &:focus {
    border-color: #bfa074;
    outline: none;
    background: #fff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1.5px solid #e2cbb3;
  border-radius: 7px;
  font-size: 1rem;
  min-height: 60px;
  max-height: 120px;
  resize: vertical;
  background: #f9f7f4;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
  box-sizing: border-box;
  &:focus {
    border-color: #bfa074;
    outline: none;
    background: #fff;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 6px 0 0 0;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Checkbox = styled.input`
  accent-color: #bfa074;
  width: 18px;
  height: 18px;
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #4b463e;
  font-weight: 400;
  cursor: pointer;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
`;

const Button = styled.button<{primary?: boolean}>`
  padding: 9px 22px;
  border-radius: 999px;
  border: none;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  background: ${({primary}) => primary ? 'linear-gradient(90deg, #e2cbb3 0%, #bfa074 100%)' : '#f3f4f6'};
  color: ${({primary}) => primary ? '#fff' : '#221f1c'};
  box-shadow: ${({primary}) => primary ? '0 2px 12px 0 rgba(191,160,116,0.13)' : 'none'};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  font-family: 'Inter', 'Segoe UI', 'sans-serif';
  &:hover {
    background: ${({primary}) => primary ? 'linear-gradient(90deg, #bfa074 0%, #e2cbb3 100%)' : '#e5e7eb'};
    color: ${({primary}) => primary ? '#fff' : '#bfa074'};
    box-shadow: ${({primary}) => primary ? '0 4px 18px 0 rgba(191,160,116,0.18)' : 'none'};
  }
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const InvestorSignupModal: React.FC<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [why, setWhy] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setName(''); setEmail(''); setWhy(''); setNewsletter(false);
    }, 1200);
  };

  return (
    <Overlay open={open}>
      <Modal>
        <ModalHeader>
          <Title>Investor Sign Up</Title>
          <Description>
            Join our exclusive investor community. Fill in your details and we’ll get in touch soon.
          </Description>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={e => setName(e.target.value)} required disabled={submitted} />
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={submitted} />
          <Label htmlFor="why">Why are you interested?</Label>
          <Textarea id="why" value={why} onChange={e => setWhy(e.target.value)} required disabled={submitted} />
          <CheckboxRow>
            <Checkbox id="newsletter" type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} disabled={submitted} />
            <CheckboxLabel htmlFor="newsletter">Subscribe to our investor newsletter</CheckboxLabel>
          </CheckboxRow>
          <ButtonRow>
            <Button type="button" onClick={onClose} disabled={submitted}>Cancel</Button>
            <Button type="submit" primary disabled={submitted}>{submitted ? 'Submitting...' : 'Submit'}</Button>
          </ButtonRow>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default InvestorSignupModal; 