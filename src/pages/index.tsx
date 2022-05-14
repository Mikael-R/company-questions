import styled from 'styled-components'

import Logo from 'components/Logo'
import Title from 'components/Title'
import Button from 'components/Button'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <Logo />
      <Title tag='h1'>
        Welcome to <br />
        Graypool
      </Title>
      <Button skin='outlined' rounded={true}>
        Start
      </Button>
    </Container>
  )
}

export default Home

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
