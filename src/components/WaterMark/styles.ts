import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 12px;

  color: ${({ theme }) => theme.colors.green600};

  font-size: 12px;

  font-weight: 500;

  img {
    margin: 0 4px -5px 1px;
  }
`
