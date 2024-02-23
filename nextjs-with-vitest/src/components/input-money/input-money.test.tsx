import { afterEach, describe, expect, it } from 'vitest'
import { fireEvent, render, cleanup } from '@testing-library/react'

import { InputMoney } from './input-money'

afterEach(cleanup)

const setup = () => {
  const { getByTestId } = render(<InputMoney />)
  const input = getByTestId('input-money') as HTMLInputElement

  return { input }
}

describe('InputMoney', () => {
  it('should render correctly', () => {
    const { input } = setup()
    expect(input).not.toBeNull()
  })

  it('should format correctly', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '1000' } })
    expect(input.value).toBe('R$ 10,00')
  })
})
