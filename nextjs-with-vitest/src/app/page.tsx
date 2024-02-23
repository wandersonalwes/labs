'use client'

import { InputMoney } from '@/components/input-money'

export default function Home() {
  return (
    <div>
      <h1>NextJS + Vitest</h1>

      <InputMoney placeholder="Digite um valor" />
    </div>
  )
}
