import { HTMLAttributes } from 'react'

import * as S from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  as: 'h1' | 'h2' | 'h3'
}

const Title = (props: Props) => {
  return <S.Title {...props} />
}

export default Title
