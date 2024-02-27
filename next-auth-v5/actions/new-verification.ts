'use server'

import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verification-token'
import { prisma } from '@/lib/prisma'

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) return { error: 'Token não existe!' }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) return { error: 'Token expirado!' }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) return { error: 'E-mail não existe!' }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  })

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  })

  return { success: 'E-mail verificado!' }
}
