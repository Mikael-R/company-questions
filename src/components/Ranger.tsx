import { useState } from 'react'

import styled from 'styled-components'

import { generateArray } from 'utils'

interface Props {
  optionsSize: number
  side?: 'left' | 'right' | 'both'
  onSelect?: (value: number) => void
}

const Ranger = ({ optionsSize, side = 'both', onSelect }: Props) => {
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

  const [selected, setSelected] = useState<number | null>(null)

  const increaser = Number((1 / optionsSize).toFixed(2))

  const options = generateArray({
    size: optionsSize + 1,
    formatValue: side === 'both' ? (value) => value * -1 : undefined
  })

  if (side === 'both') {
    const rightOptions = generateArray({
      size: optionsSize + 1
    })
    options.shift()
    options.reverse()
    options.push(...rightOptions)
  } else if (side === 'left') {
    options.reverse()
  }

  const handleSelect = (option: number) => {
    setSelected(option)
    onSelect && onSelect(option)
  }

  return (
    <Container>
      <Questions>
        {options.map((option) => {
          const bgAplha = increaser * option
          const bg = `rgba(70, 70, 70, ${bgAplha < 0 ? bgAplha * -1 : bgAplha})`
          const title = `option: ${option} | increase: ${increaser} | background: ${bg}`

          return (
            <Circle
              key={option}
              background={bg}
              title={title}
              onClick={() => handleSelect(option)}
              selected={selected === option}
            />
          )
        })}
      </Questions>

      {optionsSize >= 3 ? (
        <Texts>
          <Text>
            <span>Much worse</span>
            <span>than now</span>
          </Text>
          <Text>
            <span>Same</span>
            <span>as now</span>
          </Text>
          <Text>
            <span>Much better</span>
            <span>than now</span>
          </Text>
        </Texts>
      ) : null}
    </Container>
  )
}

export default Ranger

const Container = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Questions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

const Texts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray300};
  }

  span:first-child {
    font-style: normal;
    font-weight: 700;
  }

  span:last-child {
    font-style: thin;
    font-weight: 300;
  }
`

interface CircleProps {
  background: string
  selected: boolean
}

const Circle = styled.button<CircleProps>`
  width: 36px;
  height: 36px;

  ${({ background }) => `background: ${background};`}

  ${({ selected, theme }) =>
    selected
      ? `border: 2px solid ${theme.colors.primary};`
      : `border: 1px solid ${theme.colors.gray200};`}

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
