import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.spacings.xlg} 0;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gray100} 45%,
    ${({ theme }) => theme.colors.gray200} 100%
  );
`
