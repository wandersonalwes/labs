import { formatMoney } from '@/lib/utils/format-money'
import { stringToNumber } from '@/lib/utils/string-to-number'

import {
  useState,
  forwardRef,
  useCallback,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react'

type InputMoneyProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  value?: string
}

const mask = (value?: string) => {
  if (!value) return ''

  const rawValue = stringToNumber(value)

  const formattedValue = formatMoney(rawValue)

  return formattedValue
}

export const InputMoney = forwardRef<HTMLInputElement, InputMoneyProps>(
  (props, ref) => {
    const { value = '', onChange, ...rest } = props
    const [inputValue, setInputValue] = useState(value)

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      const maskedValue = mask(value)
      setInputValue(maskedValue)
    }, [])

    return (
      <input
        ref={ref}
        type="text"
        value={inputValue}
        onChange={handleChange}
        data-testid="input-money"
        className="border rounded p-4 h-10"
        {...rest}
      />
    )
  }
)

InputMoney.displayName = 'InputMoney'
