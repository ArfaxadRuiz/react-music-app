import styled from 'styled-components';

export const SongContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.albumBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ selected }) => (selected ? '0 0 10px #00aaff' : 'none')};
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export const SongTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SongInfo = styled.p`
  margin: 0.3rem 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
