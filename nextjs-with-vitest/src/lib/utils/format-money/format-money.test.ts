import { describe, it, expect } from 'vitest'
import { formatMoney } from './format-money'

describe('formatMoney', () => {
  it('should format price correctly', () => {
    const input = 100_000
    const outputExpected = 'R$ 1.000,00'

    const priceFormatted = formatMoney(input)

    expect(priceFormatted).toBe(outputExpected)
  })

  it('should format negative price correctly', () => {
    const input = -1_000
    const outputExpected = '-R$ 10,00'

    const priceFormatted = formatMoney(input)

    expect(priceFormatted).toBe(outputExpected)
  })

  it('should format price in cents', () => {
    const input = 3
    const outputExpected = 'R$ 0,03'

    const priceFormatted = formatMoney(input)

    expect(priceFormatted).toBe(outputExpected)
  })

  it('should format large prices correctly', () => {
    const input = 100_000_000_000
    const outputExpected = 'R$ 1.000.000.000,00'

    const priceFormatted = formatMoney(input)

    expect(priceFormatted).toBe(outputExpected)
  })
})
