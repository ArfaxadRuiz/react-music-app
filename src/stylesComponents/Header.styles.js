import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;