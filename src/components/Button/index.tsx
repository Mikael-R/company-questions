import * as S from './styles'

import type { ButtonHTMLAttributes } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'outlined' | 'default' | 'transparent'
  rounded?: boolean
  size?: 'small' | 'medium'
}

const Button = (props: Props) => {
  return <S.Button {...props} />
}

export default Button
