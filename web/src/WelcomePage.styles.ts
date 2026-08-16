import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Page = styled.main`
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 2.5rem 1.25rem;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
`;

export const Spinner = styled.span`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${({ theme }) => theme.accentMuted};
  border-top-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const Card = styled.article`
  position: relative;
  display: flex;
  align-items: stretch;
  width: min(52rem, 100%);
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);

  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

export const Hero = styled.div`
  position: relative;
  flex: 0 0 38%;
  min-height: 14rem;
  overflow: hidden;
  border-radius: 0.5rem 0 0 0.5rem;

  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 40rem) {
    flex: none;
    width: 100%;
    height: 14rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const CardBody = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2rem 1.5rem 1.75rem;
`;

export const GiftLabel = styled.p`
  position: absolute;
  top: 0.85rem;
  right: -0.55rem;
  z-index: 1;
  margin: 0;
  padding: 0.4rem 0.7rem;
  background: ${({ theme }) => theme.giftBg};
  color: ${({ theme }) => theme.gift};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transform: rotate(-11deg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  margin: 0 0 0.75rem;
  color: ${({ theme }) => theme.accent};
  font-size: 1.65rem;
  line-height: 1.25;
  font-weight: 700;
`;

export const Message = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.muted};
  line-height: 1.5;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.ink};
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;

const buttonReset = css`
  flex: 1 1 0;
  margin: 0;
  padding: 0.85rem 1rem;
  font: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 0.35rem;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${buttonReset}
  color: #fff;
  background: ${({ theme }) => theme.accent};
  border: 2px solid ${({ theme }) => theme.accent};
`;

export const SecondaryButton = styled.button`
  ${buttonReset}
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.accent};
`;
