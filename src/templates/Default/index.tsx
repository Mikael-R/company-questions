import Logo from 'components/Logo'
import Title from 'components/Title'
import Button from 'components/Button'

import * as S from './styles'

import type { ReactNode } from 'react'

interface Props {
  title?: ReactNode
  buttonText?: ReactNode
  buttonOnClick?: () => void
}

const DefaultTemplate = ({ title, buttonText, buttonOnClick }: Props) => {
  return (
    <S.Container>
      <Logo />

      {title && <Title tag='h1'>{title}</Title>}

      {buttonText && (
        <Button skin='outlined' rounded={true} onClick={buttonOnClick}>
          {buttonText}
        </Button>
      )}
    </S.Container>
  )
}

export default DefaultTemplate
