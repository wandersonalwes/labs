'use server'

import { z } from 'zod'
import bcrypt from 'bcryptjs'

import { prisma } from '@/lib/prisma'

import { SignUpSchema } from '@/schemas/sign-up-schema'
import { getUserByEmail } from '@/data/user'

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'E-mail e/ou senha inválido!' }
  }

  const { email, name, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) return { error: 'Já existe uma conta com este e-mail' }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return { success: 'Usuário criado' }
}
