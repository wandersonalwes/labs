import { describe, it, expect } from 'vitest'
import { normalizeString } from './normalize-string'

describe('normalizeString', () => {
  it('should remove extra white spaces at the beginning and end of the string', () => {
    const input = '   Hello, world!   '
    const expectedOutput = 'Hello, world!'

    const normalizedString = normalizeString(input)

    expect(normalizedString).toEqual(expectedOutput)
  })

  it('should replace multiple consecutive white spaces with a single space', () => {
    const input = 'Hello,        world!'
    const expectedOutput = 'Hello, world!'

    const normalizedString = normalizeString(input)

    expect(normalizedString).toEqual(expectedOutput)
  })

  it('should not modify a string that is already normalized', () => {
    const input = 'Hello, world!'

    const normalizedString = normalizeString(input)

    expect(normalizedString).toEqual(input)
  })
})
