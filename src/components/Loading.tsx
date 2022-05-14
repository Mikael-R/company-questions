import styled from 'styled-components'

import Title from 'components/Title'

const Loading = () => {
  return (
    <Container>
      <Title tag='h1'>pls hire me :)</Title>
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
