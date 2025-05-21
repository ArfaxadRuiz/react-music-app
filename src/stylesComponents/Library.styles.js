import styled from 'styled-components';

export const LibraryContainer = styled.aside`
  width: 25%;
  min-height: 300px;
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

// 🔽 Agregá esto debajo del export LibraryContainer:
export const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #d9363e;
  }
`;