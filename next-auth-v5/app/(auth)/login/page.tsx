'use client'

import Link from 'next/link'
import { useState, useTransition } from 'react'

import { GoogleIcon } from '@/icons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Alert, AlertDescription } from '@/components/ui/alert'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas/login-schema'

import { login } from '@/actions/login'
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons'

export default function LoginPage() {
  const [error, setError] = useState<string | null | undefined>()
  const [success, setSuccess] = useState<string | null | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError(null)
    setSuccess(null)

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Entrar</CardTitle>
            <CardDescription>Bem vindo de volta!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" className="gap-3" disabled={isPending}>
              <GoogleIcon className="size-4" />
              Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continuar com
                </span>
              </div>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@mail.com"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
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

            <Button className="w-full" disabled={isPending}>
              Entrar
            </Button>

            <span className="text-center text-muted-foreground block">
              Ainda não tem uma conta?{' '}
              <Link
                href="/sign-up"
                className="hover:underline text-foreground/80 hover:text-white font-medium"
              >
                Criar conta
              </Link>
            </span>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
