import { useState, useEffect } from 'react'

import Title from 'components/Title'

import { getRandomValueFromArray } from 'utils'

import * as S from './styles'

const Loading = () => {
  const [phase, setPhase] = useState('')

  const phases = [
    'The age is only a number!',
    'Pls hire me :)',
    'Nice code buddy :)'
  ]

  useEffect(() => {
    setPhase(getRandomValueFromArray(phases))
  }, [])

  return (
    <S.Container>
      <Title as='h1'>{phase}</Title>
    </S.Container>
  )
}

export default Loading
