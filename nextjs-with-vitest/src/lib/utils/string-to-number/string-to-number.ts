export const stringToNumber = (str: string) => {
  return Number(str.replace(/\D/g, ''))
}
