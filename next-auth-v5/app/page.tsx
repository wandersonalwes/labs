import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Next Auth v5</h1>
      <Link href="/auth/login" className={buttonVariants()}>
        Entrar
      </Link>
    </main>
  )
}
