import styled from 'styled-components'

const WaterMark = () => {
  return (
    <Container>
      Made with{' '}
      <img width={20} height={20} src='/icons/heart.png' alt='Heart' />
      by{' '}
      <a
        target='_blank'
        href='https://www.linkedin.com/in/mikael-r/'
        rel='noreferrer'
      >
        Mikael-R
      </a>
    </Container>
  )
}

export default WaterMark

const Container = styled.div`
  position: absolute;
  left: 20px;
  bottom: 12px;

  color: ${({ theme }) => theme.colors.green600};

  font-size: 12px;

  font-weight: 500;

  img {
    margin: 0 4px -5px 1px;
  }
`
