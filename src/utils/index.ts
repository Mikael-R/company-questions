interface GenerateArrayProps {
  size: number
  startAt?: number
  formatValue?: (value: number) => number
}

export const generateArray = ({
  size,
  startAt = 0,
  formatValue = (value) => value
}: GenerateArrayProps) => {
  const array = []

  for (let i = startAt; i < size; i++) {
    array.push(formatValue(i))
  }

  return array
}

export const getRandomValueFromArray = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)]

export const isNumber = (value: any) => !isNaN(Number(value))
