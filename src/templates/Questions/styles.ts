import styled from 'styled-components'

export const Container = styled.main`
  height: 90vh;
  position: relative;
`

interface WrapperProps {
  visible?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 36px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 56px 36px;
  }
`

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }
`
