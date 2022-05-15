import styled from 'styled-components'

import Title from 'components/Title'

const Loading = () => {
  const phases = [
    'The age is only a number!',
    'Pls hire me :)',
    'Nice code buddy :)'
  ]
  const phase = phases[Math.floor(Math.random() * phases.length)]

  return (
    <Container>
      <Title tag='h1'>{phase}</Title>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
