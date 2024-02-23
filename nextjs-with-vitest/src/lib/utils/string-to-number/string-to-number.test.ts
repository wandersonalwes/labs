import { describe, expect, it } from 'vitest'
import { stringToNumber } from './string-to-number'

describe('stringToNumber', () => {
  it('should convert a string to a number', () => {
    const output = stringToNumber('R$ 100,00')

    expect(output).toBe(10000)
  })

  it('should return 0 if there are no numbers in the string', () => {
    const output = stringToNumber('hello')

    expect(output).toBe(0)
  })
})
