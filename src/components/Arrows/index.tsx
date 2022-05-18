import Button from 'components/Button'

import * as S from './styles'

export interface Props {
  disableUp?: boolean
  onClickUp?: () => void
  disableDown?: boolean
  onClickDown?: () => void
}

const Arrows = ({ disableUp, onClickUp, disableDown, onClickDown }: Props) => {
  return (
    <S.Wrapper>
      <Button
        id='arrow-up'
        skin='transparent'
        disabled={disableUp}
        onClick={onClickUp}
      >
        <img width={14} height={14} src='/icons/arrow-up.svg' alt='Arrow up' />
      </Button>

      <Button
        id='arrow-down'
        skin='transparent'
        disabled={disableDown}
        onClick={onClickDown}
      >
        <img
          width={14}
          height={14}
          src='/icons/arrow-down.svg'
          alt='Arrow down'
        />
      </Button>
    </S.Wrapper>
  )
}

export default Arrows
