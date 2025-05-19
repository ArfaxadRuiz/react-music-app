import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding: 2rem;
`;

export const ContenidoPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-right: 1rem;
`;

export const BibliotecaContainer = styled.aside`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: fit-content;
  position: sticky;
  top: 2rem;
  margin-top: 1.5rem;
`;