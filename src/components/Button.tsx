import React from 'react'
import styled from 'styled-components'

interface Props extends React.ButtonHTMLAttributes<any> {
  skin?: 'outlined'
  rounded?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button = (props: Props) => {
  return <Container {...props} />
}

export default Button

const Container = styled.button<Props>`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  line-height: 21px;

  text-align: center;

  color: ${({ theme }) => theme.colors.gray400};

  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.colors.gray400};

  ${({ theme, rounded }) =>
    rounded ? `border-radius: ${theme.border.radius.lg};` : ''}

  background: transparent;

  ${({ size }) => (size === 'medium' || !size ? 'padding: 15px 80px;' : '')}

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 15px 20px ${({ theme }) => theme.colors.gray200};
    transform: translateY(-7px);
  }
`
