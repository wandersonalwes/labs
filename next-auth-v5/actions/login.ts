'use server'

import { z } from 'zod'

import { LoginSchema } from '@/schemas/login-schema'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'E-mail e/ou senha inválido!' }
  }

  return { success: 'E-mail enviado' }
}
