import styled from 'styled-components';

export const DetailContainer = styled.div`
  text-align: left;
  background-color: ${({ theme }) => theme.colors.detailBg};
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0.5rem 0 1rem;
`;

export const InfoText = styled.p`
  margin: 0.5rem 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const AlbumsTitle = styled.h4`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AlbumsList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding-left: 0;
`;

export const AlbumItem = styled.li`
  background-color: ${({ theme }) => theme.colors.albumBg};
  margin-bottom: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.albumHover};
  }
`;

export const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.7rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;