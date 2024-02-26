'use client'

import { GoogleIcon } from '@/icons'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const GoogleButton = () => {
  const handleLogin = async () => {
    try {
      await signIn('google', {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Button
      type="button"
      variant="outline"
      className="gap-3"
      onClick={handleLogin}
    >
      <GoogleIcon className="size-4" />
      Google
    </Button>
  )
}
