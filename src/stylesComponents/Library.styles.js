import styled from 'styled-components';

export const LibraryContainer = styled.aside`
  width: 25%;
  min-height: 300px; /* Esto asegura que tenga altura decente aun sin canciones */
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: sticky;
  top: 2rem;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;