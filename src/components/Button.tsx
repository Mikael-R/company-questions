import React from 'react'
import styled, { css } from 'styled-components'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'outlined' | 'default' | 'transparent'
  rounded?: boolean
  size?: 'small' | 'medium'
}

const Button = (props: Props) => {
  return <Container {...props} />
}

export default Button

const Container = styled.button<Props>`
  ${({ theme, rounded, skin, size }) => css`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.font.sizes.sm};
    line-height: 21px;

    text-align: center;

    color: ${theme.colors.gray400};

    cursor: pointer;

    width: max-content;

    ${rounded ? `border-radius: ${theme.border.radius.lg};` : ''}

    ${skin === 'outlined' &&
    `border: 1px solid ${theme.colors.gray400};background: transparent;`}

    ${skin === 'default' || !skin
      ? `border: none; background: ${theme.colors.gray200};color: white;`
      : ''}

  ${skin === 'transparent' &&
    `border: none;background: transparent;filter: none;box-shadow: none !important;padding: 0 !important;`}

  ${size === 'small' || !size ? 'padding: 7px 20px;' : ''}
  ${size === 'medium' || !size ? 'padding: 15px 80px;' : ''}

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 0px 15px 20px ${theme.colors.gray200};
      transform: translateY(-7px);
    }

    :disabled {
      opacity: 0.5;
    }
  `}
`
