import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  outline: none;
  width: 300px;
`;

export const SearchButton = styled.button`
  padding: 0.8rem 1.2rem;
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