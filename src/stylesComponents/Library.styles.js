import styled from 'styled-components';

export const LibraryContainer = styled.aside`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: fit-content;
  position: sticky;
  top: 2rem;
  margin-top: 1.5rem;
`;