import styled from 'styled-components'

import Button from 'components/Button'

interface Props {
  disableUp?: boolean
  onClickUp?: () => void
  disableDown?: boolean
  onClickDown?: () => void
}

const Arrows = ({ disableUp, onClickUp, disableDown, onClickDown }: Props) => {
  return (
    <Container>
      <Button skin='transparent' disabled={disableUp} onClick={onClickUp}>
        <img width={14} height={14} src='/icons/arrow-up.svg' alt='Arrow up' />
      </Button>

      <Button skin='transparent' disabled={disableDown} onClick={onClickDown}>
        <img
          width={14}
          height={14}
          src='/icons/arrow-down.svg'
          alt='Arrow down'
        />
      </Button>
    </Container>
  )
}

export default Arrows

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.xsm};
`
