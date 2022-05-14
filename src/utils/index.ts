export const generateArray = (size: number, startAt = 0) => {
  const array = []
  for (let i = startAt; i < size; i++) {
    array.push(i)
  }
  return array
}
