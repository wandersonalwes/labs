'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { LoaderIcon } from 'lucide-react'
import {
  ArrowLeftIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useSearchParams } from 'next/navigation'
import { newVerification } from '@/actions/new-verification'

export default function NewVerificationPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(async () => {
    if (success || error) return
    if (!token) return setError('Token não informado!')

    try {
      const data = await newVerification(token)
      setSuccess(data.success ?? null)
      setError(data.error ?? null)
    } catch (error) {
      setError('Algo deu errado!')
    }
  }, [error, success, token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Confirmando sua conta</CardTitle>
        <CardDescription>Por favor, aguarde!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 items-center">
        {!success && !error && (
          <LoaderIcon className="animate-spin text-foreground" />
        )}

        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert>
            <CheckCircledIcon className="h-4 w-4" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <Link
          href="/auth/login"
          className={buttonVariants({ className: 'gap-4 w-full' })}
        >
          <ArrowLeftIcon />
          Ir par a o login
        </Link>
      </CardContent>
    </Card>
  )
}
