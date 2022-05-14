import React from 'react'

import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2'
}

const Title = ({ tag, children, ...props }: Props) => {
  const component = React.createElement(tag, props, children)

  return <Container>{component}</Container>
}

export default Title

const Container = styled.div`
  font-style: normal;
  line-height: 41px;

  text-align: center;

  color: ${({ theme }) => theme.colors.gray400};

  h1 {
    font-size: ${({ theme }) => theme.font.sizes['4xl']};
    font-weight: 300;
  }
`
