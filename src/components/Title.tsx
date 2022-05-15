import React from 'react'

import styled from 'styled-components'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2' | 'h3'
}

const Title = ({ tag, children, ...props }: Props) => {
  const component = React.createElement(tag, props, children)

  return <Container>{component}</Container>
}

export default Title

const Container = styled.div`
  font-style: normal;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.gray400};

  h1 {
    text-align: center;

    font-size: ${({ theme }) => theme.font.sizes['4xl']};
    font-weight: 300;
  }

  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.sizes['xl']};
    line-height: 20px;

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.green600};
  }

  h3 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.sizes['2xl']};
    line-height: 30px;

    color: ${({ theme }) => theme.colors.gray500};
  }
`
