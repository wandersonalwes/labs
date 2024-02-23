import { normalizeString } from '../normalize-string/normalize-string'

export const formatMoney = (valueInCents: number) => {
  const value = valueInCents / 100
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)

  return normalizeString(valueFormatted)
}
