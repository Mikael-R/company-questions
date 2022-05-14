interface Props {
  size: number
  startAt?: number
  formatValue?: (value: number) => number
}

export const generateArray = ({
  size,
  startAt = 0,
  formatValue = (value) => value
}: Props) => {
  const array = []
  for (let i = startAt; i < size; i++) {
    array.push(formatValue(i))
  }
  return array
}
