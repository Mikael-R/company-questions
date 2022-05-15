import Title from 'components/Title'

import * as S from './styles'

const Loading = () => {
  const phases = [
    'The age is only a number!',
    'Pls hire me :)',
    'Nice code buddy :)'
  ]
  const phase = phases[Math.floor(Math.random() * phases.length)]

  return (
    <S.Container>
      <Title tag='h1'>{phase}</Title>
    </S.Container>
  )
}

export default Loading
