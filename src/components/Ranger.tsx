import styled from 'styled-components'

import { generateArray } from 'utils'

interface Props {
  optionsSize: number
  side?: 'left' | 'right' | 'both'
}

const Ranger = ({ optionsSize, side = 'both' }: Props) => {
  if (optionsSize < 0) {
    console.warn(
      'In Ranger component, optionsSize prop need be positive, so it will be set to 1'
    )
    optionsSize = 1
  }

  if (optionsSize % 2 === 0) {
    console.warn(
      'In Ranger component, optionsSize prop need be pair, so it will be rounded to next unpair'
    )
    optionsSize += 1
  }

  const increaser = Number((1 / optionsSize).toFixed(2))
  const options = generateArray(optionsSize + 1)

  if (side === 'both') {
    const rightOptions = generateArray(optionsSize + 1)
    options.shift()
    options.reverse()
    options.push(...rightOptions)
  }

  if (side === 'left') {
    options.reverse()
  }

  return (
    <Container>
      {options.map((option, i) => {
        const background = `rgba(70, 70, 70, ${increaser * option})`
        const title = `option: ${option} | increase: ${increaser}`
        return <Circle key={i} background={background} title={title} />
      })}
    </Container>
  )
}

export default Ranger

const Container = styled.div``

interface CircleProps {
  background: string
}

const Circle = styled.button<CircleProps>`
  width: 36px;
  height: 36px;

  ${({ background }) => `background: ${background};`}

  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 100%;
  outline: none;
  cursor: pointer;

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.07));
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 7px 14px ${({ theme }) => theme.colors.gray200};
    transform: translateY(-5px);
  }
`
