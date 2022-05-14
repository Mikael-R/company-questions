import styled from 'styled-components'

import Logo from 'components/Logo'
import Title from 'components/Title'
import Button from 'components/Button'

import type { ReactNode } from 'react'

interface Props {
  title?: ReactNode
  buttonText?: ReactNode
  buttonOnClick?: () => void
}

const DefaultTemplate = ({ title, buttonText, buttonOnClick }: Props) => {
  return (
    <Container>
      <Logo />

      {title && <Title tag='h1'>{title}</Title>}

      {buttonText && (
        <Button skin='outlined' rounded={true} onClick={buttonOnClick}>
          {buttonText}
        </Button>
      )}
    </Container>
  )
}

export default DefaultTemplate

const Container = styled.main`
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
