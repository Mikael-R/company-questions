import * as S from './styles'

const WaterMark = () => {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default WaterMark
