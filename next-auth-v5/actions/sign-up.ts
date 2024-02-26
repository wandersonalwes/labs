'use server'

import { z } from 'zod'

import { SignUpSchema } from '@/schemas/sign-up-schema'

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'E-mail e/ou senha inválido!' }
  }

  return { success: 'E-mail enviado' }
}
