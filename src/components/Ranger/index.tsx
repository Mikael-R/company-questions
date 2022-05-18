import * as S from './styles'

import { generateArray } from 'utils/index'

export interface Props {
  optionsSize: number
  side?: 'left' | 'right' | 'both'
  selected?: number
  onSelect?: (value: number) => void
}

const Ranger = ({ optionsSize, side = 'both', selected, onSelect }: Props) => {
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
    onSelect && onSelect(option)
  }

  return (
    <S.Wrapper>
      <S.Questions>
        {options.map((option) => {
          const bgAplha = increaser * option
          const bg = `rgba(70, 70, 70, ${bgAplha < 0 ? bgAplha * -1 : bgAplha})`
          const title = `option: ${option} | increase: ${increaser} | background: ${bg}`

          return (
            <S.Circle
              key={option}
              name='question-button'
              background={bg}
              title={title}
              onClick={() => handleSelect(option)}
              selected={selected === option}
            />
          )
        })}
      </S.Questions>

      {optionsSize >= 3 ? (
        <S.Texts
          style={{ flexDirection: side === 'left' ? 'row-reverse' : 'row' }}
        >
          {side === 'both' && (
            <S.Text>
              <span>Much worse</span>
              <span>than now</span>
            </S.Text>
          )}

          <S.Text>
            <span>Same</span>
            <span>as now</span>
          </S.Text>
          <S.Text>
            <span>Much better</span>
            <span>than now</span>
          </S.Text>
        </S.Texts>
      ) : null}
    </S.Wrapper>
  )
}

export default Ranger
