import { buttonVariants } from '@/components/ui/button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-bold">Autenticação falhou!</h2>

      <Link
        href="/auth/login"
        className={buttonVariants({ className: 'gap-4' })}
      >
        <ArrowLeftIcon />
        Ir par a o login
      </Link>
    </div>
  )
}
