import styled from 'styled-components';

export const ResultsSection = styled.section`
  width: 70%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BandaWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.albumBg};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  width: 100%;
`;

export const AddButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const DetailLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #00aaff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
