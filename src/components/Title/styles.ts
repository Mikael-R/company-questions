import styled, { css } from 'styled-components'

import type { Props } from '.'

export const Title = styled.h1<Props>`
  ${({ theme, as }) => css`
    font-style: normal;
    line-height: 41px;

    color: ${theme.colors.gray400};

    ${as === 'h1' &&
    `
      text-align: center;

      font-size: ${theme.font.sizes['4xl']};
      font-weight: 300;
    `}

    ${as === 'h2' &&
    `
      font-weight: 600;
      font-size: ${theme.font.sizes['xl']};
      line-height: 20px;

      text-transform: uppercase;

      color: ${theme.colors.green600};
    `}

    ${as === 'h3' &&
    `
      font-weight: 300;
      font-size: ${theme.font.sizes['2xl']};
      line-height: 30px;

      color: ${theme.colors.gray500};
    `}
  `}
`
