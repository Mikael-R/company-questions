import { HTMLAttributes } from 'react'

import * as S from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2' | 'h3'
}

const Title = (props: Props) => {
  return <S.Title as={props.tag} {...props} />
}

export default Title
